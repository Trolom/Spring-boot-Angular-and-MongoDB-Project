package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "AccessAddress")
public class AccessAddress implements Serializable {
	@Id
	private int accessAddress_id;
	private String host;
	private int port;
	private String ap;
    private Sensor sensor;
	
}