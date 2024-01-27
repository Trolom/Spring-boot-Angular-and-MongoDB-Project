package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Company")
public class Company implements Serializable{
	@Id
	private int company_id;
	private String name;
	private String website;
    private Address address;
}