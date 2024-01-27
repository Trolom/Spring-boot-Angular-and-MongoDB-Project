package com.example.project.controllers;

import com.example.project.entities.Technician;
import com.example.project.services.TechnicianService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/technician")
public class TechnicianController extends GenericController<Technician, Integer> {

    private final TechnicianService technicianService;

    @Autowired
    public TechnicianController(TechnicianService technicianService) {
        this.technicianService = technicianService;
    }

    @Override
    public GenericService<Technician, Integer> getService() {
        return technicianService;
    }
}
