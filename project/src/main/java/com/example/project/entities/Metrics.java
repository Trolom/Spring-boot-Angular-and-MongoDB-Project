package com.example.project.entities;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Metrics")
public class Metrics implements Serializable {
	@Id
	private int metrics_id;
	private int measurement;
	private String unit_measurement;
	private Date timestamp;
    private Sensor sensor;
	
}