package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Address")
public class Address implements Serializable{
	@Id
	private int address_id;
	private String street;
	private int number;
	private Boolean is_HQ;
    private City city;
	
}