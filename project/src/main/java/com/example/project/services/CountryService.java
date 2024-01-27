package com.example.project.services;

import com.example.project.entities.Country;
import com.example.project.repositories.CountryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CountryService extends GenericService<Country, Integer> {

    private final CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
        super.setRepository(countryRepository);
    }
}
