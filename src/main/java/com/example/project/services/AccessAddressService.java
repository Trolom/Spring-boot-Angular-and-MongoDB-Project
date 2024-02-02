package com.example.project.services;

import com.example.project.entities.AccessAddress;
import com.example.project.repositories.AccessAddressRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccessAddressService extends GenericService<AccessAddress, Integer> {

    private final AccessAddressRepository accessAddressRepository;

    @Autowired
    public AccessAddressService(AccessAddressRepository accessAddressRepository) {
        this.accessAddressRepository = accessAddressRepository;
        super.setRepository(accessAddressRepository);
    }
}
