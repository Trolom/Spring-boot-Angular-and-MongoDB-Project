package com.example.project.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "Employee")
public class Employee implements Serializable {
	@Id
	private int employee_id;
	private String name;
	private String position;
	private String contract_details;
    private Department department;
}