package com.example.project.services;

import com.example.project.entities.Department;
import com.example.project.repositories.DepartmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DepartmentService extends GenericService<Department, Integer> {

    private final DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
        super.setRepository(departmentRepository);
    }
}
