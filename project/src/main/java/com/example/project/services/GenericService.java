package com.example.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public abstract class GenericService<T, ID> {

    @Autowired
    private MongoRepository<T, ID> repository;
    
    public void setRepository(MongoRepository<T, ID> repository) {
        this.repository = repository;
    }
    
    public T create(T entity) {
        return repository.save(entity);
    }

    public T getById(ID id) {
        Optional<T> optionalEntity = repository.findById(id);
        return optionalEntity.orElse(null);
    }

    public List<T> getAll() {
        return repository.findAll();
    }

    public T update(T entity) {
        return repository.save(entity);
    }

    public void delete(ID id) {
        repository.deleteById(id);
    }
}
