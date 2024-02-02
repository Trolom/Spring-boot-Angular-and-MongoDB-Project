package com.example.project.services;

import com.example.project.entities.Technician;
import com.example.project.repositories.TechnicianRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TechnicianService extends GenericService<Technician, Integer> {

    private final TechnicianRepository technicianRepository;

    @Autowired
    public TechnicianService(TechnicianRepository technicianRepository) {
        this.technicianRepository = technicianRepository;
        super.setRepository(technicianRepository);
    }
}
