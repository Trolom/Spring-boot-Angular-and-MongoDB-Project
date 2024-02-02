package com.example.project.services;

import com.example.project.entities.Address;
import com.example.project.repositories.AddressRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AddressService extends GenericService<Address, Integer> {

    private final AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
        super.setRepository(addressRepository);
    }
}
