package com.example.project.services;



import com.example.project.entities.TrainingCertificate;
import com.example.project.repositories.TrainingCertificateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TrainingCertificateService extends GenericService<TrainingCertificate, Integer> {

    private final TrainingCertificateRepository trainingCertificateRepository;

    @Autowired
    public TrainingCertificateService(TrainingCertificateRepository trainingCertificateRepository) {
        this.trainingCertificateRepository = trainingCertificateRepository;
        super.setRepository(trainingCertificateRepository);
    }
}
