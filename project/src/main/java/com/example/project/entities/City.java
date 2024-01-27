package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "City")
public class City implements Serializable{
	@Id
	private int city_id;
	private String name;
	private int size;
    private Country country;
	
}