package com.example.project.services;

import com.example.project.entities.Field;
import com.example.project.repositories.FieldRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FieldService extends GenericService<Field, Integer> {

    private final FieldRepository fieldRepository;

    @Autowired
    public FieldService(FieldRepository fieldRepository) {
        this.fieldRepository = fieldRepository;
        super.setRepository(fieldRepository);
    }
}
