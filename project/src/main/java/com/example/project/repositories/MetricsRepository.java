package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.project.entities.Metrics;

@Repository
public interface MetricsRepository extends MongoRepository<Metrics, Integer>{
}
