package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.TrainingCertificate;

@Repository
public interface TrainingCertificateRepository extends MongoRepository<TrainingCertificate, Integer>{

}
