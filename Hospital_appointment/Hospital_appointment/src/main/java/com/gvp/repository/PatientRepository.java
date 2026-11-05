package com.gvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gvp.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    
}