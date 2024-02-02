package com.example.project.controllers;

import com.example.project.entities.Sensor;
import com.example.project.services.SensorService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sensor")
public class SensorController extends GenericController<Sensor, Integer> {

    private final SensorService sensorService;

    @Autowired
    public SensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @Override
    public GenericService<Sensor, Integer> getService() {
        return sensorService;
    }
}
