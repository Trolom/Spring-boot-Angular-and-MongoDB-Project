package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Type")
public class Type implements Serializable {
	@Id
	private int type_id;
	private String name;
	private String description;
	
}