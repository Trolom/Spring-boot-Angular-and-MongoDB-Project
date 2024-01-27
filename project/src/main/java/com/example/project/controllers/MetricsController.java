package com.example.project.controllers;

import com.example.project.entities.Metrics;
import com.example.project.services.MetricsService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/metrics")
public class MetricsController extends GenericController<Metrics, Integer> {

    private final MetricsService metricsService;

    @Autowired
    public MetricsController(MetricsService metricsService) {
        this.metricsService = metricsService;
    }

    @Override
    public GenericService<Metrics, Integer> getService() {
        return metricsService;
    }
}
