package com.example.project.controllers;

import com.example.project.entities.Department;
import com.example.project.services.DepartmentService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/department")
public class DepartmentController extends GenericController<Department, Integer> {

    private final DepartmentService departmentService;

    @Autowired
    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @Override
    public GenericService<Department, Integer> getService() {
        return departmentService;
    }
}
