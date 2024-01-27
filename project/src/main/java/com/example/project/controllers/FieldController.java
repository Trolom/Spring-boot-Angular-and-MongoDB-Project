package com.example.project.controllers;

import com.example.project.entities.Field;
import com.example.project.services.FieldService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/field")
public class FieldController extends GenericController<Field, Integer> {

    private final FieldService fieldService;

    @Autowired
    public FieldController(FieldService fieldService) {
        this.fieldService = fieldService;
    }

    @Override
    public GenericService<Field, Integer> getService() {
        return fieldService;
    }
}
