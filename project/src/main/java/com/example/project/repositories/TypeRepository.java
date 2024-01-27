package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.Type;

@Repository
public interface TypeRepository extends MongoRepository<Type, Integer>{

}
