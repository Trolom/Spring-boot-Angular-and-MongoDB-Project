package com.example.project.services;

import com.example.project.entities.Projects;
import com.example.project.repositories.ProjectsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProjectsService extends GenericService<Projects, Integer> {

    private final ProjectsRepository projectsRepository;

    @Autowired
    public ProjectsService(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
        super.setRepository(projectsRepository);
    }
}
