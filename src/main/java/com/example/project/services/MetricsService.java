package com.example.project.services;

import com.example.project.entities.Metrics;
import com.example.project.repositories.MetricsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MetricsService extends GenericService<Metrics, Integer> {

    private final MetricsRepository metricsRepository;

    @Autowired
    public MetricsService(MetricsRepository metricsRepository) {
        this.metricsRepository = metricsRepository;
        super.setRepository(metricsRepository);
    }
}
