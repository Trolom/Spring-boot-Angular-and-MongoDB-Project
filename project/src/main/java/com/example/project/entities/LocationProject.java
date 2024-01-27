package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "LocationProject")
public class LocationProject implements Serializable {
	@Id
	private int locationProject_id;
	private String climate;
	private String description;
	private String resources;	
}