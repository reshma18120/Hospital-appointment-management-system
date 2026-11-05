package com.gvp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gvp.entity.Appointment;
import com.gvp.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Book a new appointment
    public Appointment bookAppointment(Appointment appointment) {
        appointment.setStatus("BOOKED");
        return appointmentRepository.save(appointment);
    }

    // Fetch all appointments
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}