package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Review")
public class Review implements Serializable {
	@Id
	private int review_id;
	private int performance_rating;
	private String areas_of_improvement;
	private String title;
	//reviewed by
    private Employee employee;
	
}