package com.example.project.services;

import com.example.project.entities.SensorMaintenance;
import com.example.project.repositories.SensorMaintenanceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SensorMaintenanceService extends GenericService<SensorMaintenance, Integer> {

    private final SensorMaintenanceRepository sensorMaintenanceRepository;

    @Autowired
    public SensorMaintenanceService(SensorMaintenanceRepository sensorMaintenanceRepository) {
        this.sensorMaintenanceRepository = sensorMaintenanceRepository;
        super.setRepository(sensorMaintenanceRepository);
    }
}
