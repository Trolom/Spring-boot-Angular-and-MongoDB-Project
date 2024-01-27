package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Country")
public class Country implements Serializable {
	@Id
	private int country_id;
	private String name;
	private String government_type;
	private String continent;
	
}