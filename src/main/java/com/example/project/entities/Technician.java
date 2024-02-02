package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Technician")
public class Technician implements Serializable {
	@Id
	private int technician_id;
	private String responsibilities;
	private String name;
	private String email;
	
}