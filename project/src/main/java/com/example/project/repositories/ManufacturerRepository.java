package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.project.entities.Manufacturer;

@Repository
public interface ManufacturerRepository extends MongoRepository<Manufacturer, Integer>{
}
