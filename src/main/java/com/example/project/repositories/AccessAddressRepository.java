package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.AccessAddress;

@Repository
public interface AccessAddressRepository extends MongoRepository<AccessAddress, Integer>{
}
