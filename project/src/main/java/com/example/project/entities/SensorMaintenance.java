package com.example.project.entities;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "SensorMaintenance")
public class SensorMaintenance implements Serializable {
	@Id
	private int sensorMaintenance_id;
	private Date installation_date;
	private Date calibration_date;
	private String status;
	private String maintenance_by;
    private Sensor sensor;
	
}