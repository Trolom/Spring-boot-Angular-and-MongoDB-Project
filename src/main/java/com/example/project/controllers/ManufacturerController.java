package com.example.project.controllers;

import com.example.project.entities.Manufacturer;
import com.example.project.services.ManufacturerService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/manufacturer")
public class ManufacturerController extends GenericController<Manufacturer, Integer> {

    private final ManufacturerService manufacturerService;

    @Autowired
    public ManufacturerController(ManufacturerService manufacturerService) {
        this.manufacturerService = manufacturerService;
    }

    @Override
    public GenericService<Manufacturer, Integer> getService() {
        return manufacturerService;
    }
}
