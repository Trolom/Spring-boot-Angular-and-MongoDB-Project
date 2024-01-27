package com.example.project.services;

import com.example.project.entities.Manufacturer;
import com.example.project.repositories.ManufacturerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ManufacturerService extends GenericService<Manufacturer, Integer> {

    private final ManufacturerRepository manufacturerRepository;

    @Autowired
    public ManufacturerService(ManufacturerRepository manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
        super.setRepository(manufacturerRepository);
    }
}
