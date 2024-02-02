package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.TimeActive;

@Repository
public interface TimeActiveRepository extends MongoRepository<TimeActive, Integer>{

}
