package com.example.project.entities;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "TimeActive")
public class TimeActive implements Serializable {
	@Id
	private int timeActive_id;
	private Date start_time;
	private Date end_time;
	private String status;
	private int total_time;
    private Sensor sensor;
	
}