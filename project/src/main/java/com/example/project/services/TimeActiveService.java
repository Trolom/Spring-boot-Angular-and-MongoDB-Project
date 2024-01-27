package com.example.project.services;

import com.example.project.entities.TimeActive;
import com.example.project.repositories.TimeActiveRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TimeActiveService extends GenericService<TimeActive, Integer> {

    private final TimeActiveRepository timeActiveRepository;

    @Autowired
    public TimeActiveService(TimeActiveRepository timeActiveRepository) {
        this.timeActiveRepository = timeActiveRepository;
        super.setRepository(timeActiveRepository);
    }
}
