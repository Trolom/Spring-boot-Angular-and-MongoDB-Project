package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project.entities.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, Integer>{

}
