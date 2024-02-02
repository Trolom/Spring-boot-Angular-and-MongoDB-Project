package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Sensor")
public class Sensor implements Serializable {
	@Id
	private int sensor_id;
	private int value;
	private String version;
	private Type type;
	
}