package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.project.entities.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee,Integer>{}