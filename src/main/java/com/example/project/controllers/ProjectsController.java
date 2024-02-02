package com.example.project.controllers;

import com.example.project.entities.Projects;
import com.example.project.services.ProjectsService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")
public class ProjectsController extends GenericController<Projects, Integer> {

    private final ProjectsService projectsService;

    @Autowired
    public ProjectsController(ProjectsService projectsService) {
        this.projectsService = projectsService;
    }

    @Override
    public GenericService<Projects, Integer> getService() {
        return projectsService;
    }
}
