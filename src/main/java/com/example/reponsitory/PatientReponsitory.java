package com.example.reponsitory;

import com.example.entity.Patient;
import com.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface PatientReponsitory extends JpaRepository<Patient,Integer> {
    Patient findProfileByUser(User user);
    Patient findProfileById(int id);
}
