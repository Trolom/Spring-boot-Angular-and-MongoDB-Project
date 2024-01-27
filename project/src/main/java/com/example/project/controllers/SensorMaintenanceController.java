package com.example.project.controllers;

import com.example.project.entities.SensorMaintenance;
import com.example.project.services.SensorMaintenanceService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sensormaintenance")
public class SensorMaintenanceController extends GenericController<SensorMaintenance, Integer> {

    private final SensorMaintenanceService sensorMaintenanceService;

    @Autowired
    public SensorMaintenanceController(SensorMaintenanceService sensorMaintenanceService) {
        this.sensorMaintenanceService = sensorMaintenanceService;
    }

    @Override
    public GenericService<SensorMaintenance, Integer> getService() {
        return sensorMaintenanceService;
    }
}
