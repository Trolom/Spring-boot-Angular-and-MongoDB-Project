package com.example.project.services;

import com.example.project.entities.Sensor;
import com.example.project.repositories.SensorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SensorService extends GenericService<Sensor, Integer> {

    private final SensorRepository sensorRepository;

    @Autowired
    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
        super.setRepository(sensorRepository);
    }
}
