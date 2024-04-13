package org.example.dacnpm.controller;

import java.util.ArrayList;
import java.util.List;

import org.example.dacnpm.dto.BookingDTO;
import org.example.dacnpm.dto.BookingReturnDTO;
import org.example.dacnpm.dto.DoctorDTO;
import org.example.dacnpm.dto.PatientDTO;
import org.example.dacnpm.model.Booking;
import org.example.dacnpm.model.Doctor;
import org.example.dacnpm.model.Patient;
import org.example.dacnpm.model.ReposeOject;
import org.example.dacnpm.repositories.BookingRepository;
import org.example.dacnpm.repositories.DoctorRepository;
import org.example.dacnpm.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/booking")
public class BookingController {
	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private PatientRepository patientRepository;
	@Autowired
	private DoctorRepository doctorRepository;
	
	@PostMapping("/add")
	 public @ResponseBody ResponseEntity<ReposeOject> insertBooking(@RequestBody BookingDTO bookingDTO){
		Doctor doctor = doctorRepository.findById(bookingDTO.getDoctorId()).get();
		Patient patient = patientRepository.findById(bookingDTO.getPatientId()).get();
		
		Booking booking = new Booking();
		booking.setDate(bookingDTO.getDate());
		booking.setDoctor(doctor);
		booking.setPatient(patient);
		booking.setStatus(1);
		
		if(bookingRepository.save(booking)!=null) {
			return ResponseEntity.status(HttpStatus.OK).body(
	    			new ReposeOject("OK", " Successful", BookingReturnDTO.convertBookingReturnDTO(booking))
	    			);	
		}else {
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(
	    			new ReposeOject("failed", " Error", null)
	    			);
		}
		
		
		
	}
	
	@GetMapping("/doctor/{id}")
	public @ResponseBody ResponseEntity<ReposeOject> getBookingByDoctorId(@PathVariable("id")long doctorId){
		Doctor doctor = doctorRepository.findById(doctorId).get();
		
		List<Booking> bookings = bookingRepository.findByDoctor(doctor);
		
		List<BookingReturnDTO> bookingResult = new ArrayList<>();
		
		for (Booking book : bookings) {
			bookingResult.add(BookingReturnDTO.convertBookingReturnDTO(book));
		}
		
		DoctorDTO result = DoctorDTO.convert(doctor);
		result.setBookings(bookingResult);
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(
    			new ReposeOject("success", " Success",result )
    			);


		
	}
	
	@GetMapping("/patient/{id}")
	public @ResponseBody ResponseEntity<ReposeOject> getBookingByPatientId(@PathVariable("id")long patientId){
		Patient patient = patientRepository.findById(patientId).get();
		
		List<Booking> bookings = bookingRepository.findByPatient(patient);
		
		List<BookingReturnDTO> bookingResult = new ArrayList<>();
		
		for (Booking book : bookings) {
			bookingResult.add(BookingReturnDTO.convertBookingReturnDTO(book));
		}
		
		PatientDTO result = PatientDTO.convert(patient);
		result.setBookins(bookingResult);
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(
    			new ReposeOject("success", " Success",result )
    			);


		
	}


}
