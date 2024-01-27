package com.example.project.controllers;

import com.example.project.entities.City;
import com.example.project.services.CityService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/city")
public class CityController extends GenericController<City, Integer> {

    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @Override
    public GenericService<City, Integer> getService() {
        return cityService;
    }
}
