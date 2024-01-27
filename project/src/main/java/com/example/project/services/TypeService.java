package com.example.project.services;

import com.example.project.entities.Type;
import com.example.project.repositories.TypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TypeService extends GenericService<Type, Integer> {

    private final TypeRepository typeRepository;

    @Autowired
    public TypeService(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
        super.setRepository(typeRepository);
    }
}
