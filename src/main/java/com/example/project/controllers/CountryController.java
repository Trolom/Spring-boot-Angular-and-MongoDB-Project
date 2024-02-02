package com.example.project.controllers;

import com.example.project.entities.Country;
import com.example.project.services.CountryService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/country")
public class CountryController extends GenericController<Country, Integer> {

    private final CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @Override
    public GenericService<Country, Integer> getService() {
        return countryService;
    }
}
