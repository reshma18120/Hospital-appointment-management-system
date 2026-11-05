package com.gvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gvp.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    // CRUD methods are auto-provided
}