package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.project.entities.Address;

@Repository
public interface AddressRepository extends MongoRepository<Address, Integer>{
}
