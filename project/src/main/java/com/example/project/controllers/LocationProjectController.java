package com.example.project.controllers;

import com.example.project.entities.LocationProject;
import com.example.project.services.LocationProjectService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locationproject")
public class LocationProjectController extends GenericController<LocationProject, Integer> {

    private final LocationProjectService locationProjectService;

    @Autowired
    public LocationProjectController(LocationProjectService locationProjectService) {
        this.locationProjectService = locationProjectService;
    }

    @Override
    public GenericService<LocationProject, Integer> getService() {
        return locationProjectService;
    }
}
