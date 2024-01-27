import { Component } from '@angular/core';
import { DepartmentService } from '../../Services/department.service';
import { EmployeeService } from '../../Services/employee.service';
import { Department } from '../../models/department'
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  departmentIdVar: number;
  employeeList : Employee[] = [];
  departmentList : Department[] = [];
  newEmployee : Employee = new Employee();
  creatingMode : boolean = true;


  constructor(private employeeService : EmployeeService,
              private departmentService : DepartmentService){
	this.departmentIdVar = 0;
    this.getAllEmployees();
    this.getAllDepartments();
  }
  
  getAllEmployees(){
    this.employeeService.getAll().subscribe((response : Employee[])=>{
      this.employeeList = response;
    });
  }
  
  getAllDepartments(){
    this.departmentService.getAll().subscribe((response : Department[])=>{
      this.departmentList = response;
    })
  }
  
  modifyEmployee(){
    this.employeeService.update(this.newEmployee).subscribe(()=>{
      alert("Employee Updated Successfully");
      window.location.reload();
    })
  }
  
  createEmployee() {
    this.departmentService.get(this.departmentIdVar).subscribe((department: Department) => {
      const newEmployee = {
      	employee_id: Math.floor(Math.random() * 1000),
      	name: this.newEmployee.name,
      	position: this.newEmployee.position,
      	contract_details: this.newEmployee.contract_details,
      	department: department
      };

    this.employeeService.create(newEmployee).subscribe(() => {
      alert("Employee Added Successfully");
      window.location.reload();
    });
  });
}

  deleteEmployee(employee_id : number){
    if(confirm("Are you sure you want to delete this employee !!!")){
      this.employeeService.delete(employee_id).subscribe(()=>{
        alert("Employee Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(employee: Employee = new Employee()) {
  if (employee.name === "") {
    this.newEmployee = new Employee();
    this.departmentIdVar = this.departmentList.length > 0 ? this.departmentList[0].department_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newEmployee = employee;
  }
}

}