package com.example.project.controllers;

import com.example.project.entities.AccessAddress;
import com.example.project.services.AccessAddressService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accessaddress")
public class AccessAddressController extends GenericController<AccessAddress, Integer> {

    private final AccessAddressService accessAddressService;

    @Autowired
    public AccessAddressController(AccessAddressService accessAddressService) {
        this.accessAddressService = accessAddressService;
    }

    @Override
    public GenericService<AccessAddress, Integer> getService() {
        return accessAddressService;
    }
}
