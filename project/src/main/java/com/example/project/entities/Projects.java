package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Projects")
public class Projects implements Serializable {
	@Id
	private int projects_id;
	private int budget;
	private Boolean internal;
	private String name;
	private Boolean still_going;
    private LocationProject locationProject;
	
}