package com.example.project.entities;


import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Department")
public class Department implements Serializable{
	@Id
	private int department_id;
	private String department_name;
	private int budget;
	private String description;
	private String contact_info;
	private String head_of_department;

}
