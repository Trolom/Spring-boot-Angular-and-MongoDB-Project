package com.example.project.controllers;


import com.example.project.entities.Employee;
import com.example.project.services.EmployeeService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController extends GenericController<Employee, Integer> {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Override
    public GenericService<Employee, Integer> getService() {
        return employeeService;
    }
}