package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Manufacturer")
public class Manufacturer implements Serializable {
	@Id
	private int manufacturer_id;
	private int quantity;
    private Sensor sensor;
	
}