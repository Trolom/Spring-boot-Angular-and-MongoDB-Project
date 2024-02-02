package com.example.project.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "TrainingCertificate")
public class TrainingCertificate implements Serializable{
	@Id
	private int trainingCertificate_id;
	private String title;
	private Date completion_date;
	//Completed by
    private Employee employee;
}