package com.example.project.controllers;

import com.example.project.entities.Company;
import com.example.project.services.CompanyService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public class CompanyController extends GenericController<Company, Integer> {

    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @Override
    public GenericService<Company, Integer> getService() {
        return companyService;
    }
}
