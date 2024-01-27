package com.example.project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.project.entities.ProjectAdmin;

@Repository
public interface ProjectAdminRepository extends MongoRepository<ProjectAdmin, Integer>{
}
