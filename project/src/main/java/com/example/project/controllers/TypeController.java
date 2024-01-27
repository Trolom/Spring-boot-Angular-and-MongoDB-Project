package com.example.project.controllers;

import com.example.project.entities.Type;
import com.example.project.services.TypeService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/type")
public class TypeController extends GenericController<Type, Integer> {

    private final TypeService typeService;

    @Autowired
    public TypeController(TypeService typeService) {
        this.typeService = typeService;
    }

    @Override
    public GenericService<Type, Integer> getService() {
        return typeService;
    }
}
