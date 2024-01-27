package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.SensorMaintenance;

@Repository
public interface SensorMaintenanceRepository extends MongoRepository<SensorMaintenance, Integer>{

}
