package org.example.dacnpm.controller;

import org.example.dacnpm.model.ReposeOject;
import org.example.dacnpm.model.Shedule;
import org.example.dacnpm.repositories.SheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("v1/shedule")
public class SheduleController {

    @Autowired
    private SheduleRepository sheduleRepository;

    @GetMapping("")
    List<Shedule> getAllShedules() {
        return sheduleRepository.findAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<ReposeOject> findSheduleById(@PathVariable long id) {
        Optional<Shedule> shedule = sheduleRepository.findById(id);
        if (shedule.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body( new ReposeOject( "ok", "Query Shedule successfully", shedule));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body( new ReposeOject( "ok", "Can not find shedule", ""));
        }
    }

    @PostMapping("/insert")
    ResponseEntity<ReposeOject> insertShedule(@RequestBody Shedule shedule) {
        List<Shedule> findAllShedules = sheduleRepository.findByDoctorIdAndDateAndFromTimeGreaterThanEqualAndToTimeLessThanEqual(shedule.getDoctorId(), shedule.getDate(), shedule.getFromTime(), shedule.getToTime());
        if (findAllShedules.size() > 0){
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ReposeOject( "False", "Can not insert shedule because shedule already exists", "")
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ReposeOject("ok", "success", sheduleRepository.save(shedule))
        );
    }
}
