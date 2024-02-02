package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.project.entities.LocationProject;

@Repository
public interface LocationProjectRepository extends MongoRepository<LocationProject, Integer>{
}
