package com.example.project.services;

import com.example.project.entities.Company;
import com.example.project.repositories.CompanyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CompanyService extends GenericService<Company, Integer> {

    private final CompanyRepository companyRepository;

    @Autowired
    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
        super.setRepository(companyRepository);
    }
}
