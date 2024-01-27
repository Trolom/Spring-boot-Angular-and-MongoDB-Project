package com.example.project.controllers;

import com.example.project.entities.Address;
import com.example.project.services.AddressService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/address")
public class AddressController extends GenericController<Address, Integer> {

    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @Override
    public GenericService<Address, Integer> getService() {
        return addressService;
    }
}
