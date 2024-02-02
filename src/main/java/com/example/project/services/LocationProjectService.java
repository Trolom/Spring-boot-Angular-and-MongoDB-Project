package com.example.project.services;

import com.example.project.entities.LocationProject;
import com.example.project.repositories.LocationProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LocationProjectService extends GenericService<LocationProject, Integer> {

    private final LocationProjectRepository locationProjectRepository;

    @Autowired
    public LocationProjectService(LocationProjectRepository locationProjectRepository) {
        this.locationProjectRepository = locationProjectRepository;
        super.setRepository(locationProjectRepository);
    }
}
