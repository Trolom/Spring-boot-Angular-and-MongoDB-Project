package com.example.project.services;

import com.example.project.entities.City;
import com.example.project.repositories.CityRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CityService extends GenericService<City, Integer> {

    private final CityRepository cityRepository;

    @Autowired
    public CityService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
        super.setRepository(cityRepository);
    }
}
