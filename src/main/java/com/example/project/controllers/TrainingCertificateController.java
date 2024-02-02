package com.example.project.controllers;

import com.example.project.entities.TrainingCertificate;
import com.example.project.services.TrainingCertificateService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trainingcertificate")
public class TrainingCertificateController extends GenericController<TrainingCertificate, Integer> {

    private final TrainingCertificateService trainingCertificateService;

    @Autowired
    public TrainingCertificateController(TrainingCertificateService trainingCertificateService) {
        this.trainingCertificateService = trainingCertificateService;
    }

    @Override
    public GenericService<TrainingCertificate, Integer> getService() {
        return trainingCertificateService;
    }
}

