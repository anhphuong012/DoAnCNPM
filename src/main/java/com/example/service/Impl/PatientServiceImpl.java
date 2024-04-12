package com.example.service.Impl;


import com.example.entity.Patient;
import com.example.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.reponsitory.PatientReponsitory;


@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientReponsitory patientReponsitory;

    @Override
    public void update(Patient patient) {
        patientReponsitory.saveAndFlush(patient);
    }
}
