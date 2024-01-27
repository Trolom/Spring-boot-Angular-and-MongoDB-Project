package com.example.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.project.entities.Employee;
import com.example.project.repositories.EmployeeRepository;



@Service
public class EmployeeService extends GenericService<Employee, Integer> {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
        super.setRepository(employeeRepository);
    }
}
