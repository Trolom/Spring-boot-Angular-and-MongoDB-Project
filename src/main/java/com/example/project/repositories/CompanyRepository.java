package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.Company;

@Repository
public interface CompanyRepository extends MongoRepository<Company, Integer>{
}
