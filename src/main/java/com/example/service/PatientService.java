package com.example.service;

import com.example.entity.Patient;
import org.springframework.stereotype.Service;

@Service
public interface PatientService {
    void update(Patient profile);
}
