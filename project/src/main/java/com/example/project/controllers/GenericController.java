package com.example.project.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.example.project.services.GenericService;

import java.util.List;

@CrossOrigin(origins = "*")
public abstract class GenericController<T, ID> {

    public abstract GenericService<T, ID> getService();

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<T> create(@RequestBody T entity) {
        T newEntity = getService().create(entity);
        return new ResponseEntity<>(newEntity, HttpStatus.CREATED);
    }

    @GetMapping(path = "/{entityId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<T> getById(@PathVariable ID entityId) {
        T entityFound = getService().getById(entityId);
        return new ResponseEntity<>(entityFound, HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<T>> getAll() {
        List<T> entitiesList = getService().getAll();
        return new ResponseEntity<>(entitiesList, HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<T> update(@RequestBody T entity) {
        T entityUpdated = getService().update(entity);
        return new ResponseEntity<>(entityUpdated, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Object> delete(@PathVariable ID id) {
        getService().delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
