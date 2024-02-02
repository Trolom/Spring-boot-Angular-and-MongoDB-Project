package com.example.project.services;

import com.example.project.entities.ProjectAdmin;
import com.example.project.repositories.ProjectAdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProjectAdminService extends GenericService<ProjectAdmin, Integer> {

    private final ProjectAdminRepository projectAdminRepository;

    @Autowired
    public ProjectAdminService(ProjectAdminRepository projectAdminRepository) {
        this.projectAdminRepository = projectAdminRepository;
        super.setRepository(projectAdminRepository);
    }
}
