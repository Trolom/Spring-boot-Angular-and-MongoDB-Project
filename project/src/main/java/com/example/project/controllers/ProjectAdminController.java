package com.example.project.controllers;

import com.example.project.entities.ProjectAdmin;
import com.example.project.services.ProjectAdminService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projectadmin")
public class ProjectAdminController extends GenericController<ProjectAdmin, Integer> {

    private final ProjectAdminService projectAdminService;

    @Autowired
    public ProjectAdminController(ProjectAdminService projectAdminService) {
        this.projectAdminService = projectAdminService;
    }

    @Override
    public GenericService<ProjectAdmin, Integer> getService() {
        return projectAdminService;
    }
}
