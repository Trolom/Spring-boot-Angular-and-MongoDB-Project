package com.example.project.controllers;

import com.example.project.entities.TimeActive;
import com.example.project.services.TimeActiveService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/timeactive")
public class TimeActiveController extends GenericController<TimeActive, Integer> {

    private final TimeActiveService timeActiveService;

    @Autowired
    public TimeActiveController(TimeActiveService timeActiveService) {
        this.timeActiveService = timeActiveService;
    }

    @Override
    public GenericService<TimeActive, Integer> getService() {
        return timeActiveService;
    }
}
