import { Component } from '@angular/core';
import { DepartmentService } from '../../Services/department.service';
import { Department } from '../../models/department';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departmentList : Department[] = [];
  newDepartment : Department = new Department();
  creatingMode : boolean = true;
  
  
  constructor(private departmentService : DepartmentService){
    this.getAllDepartments();
  }
  
  getAllDepartments(){
    this.departmentService.getAll().subscribe((response : Department[])=>{
      this.departmentList = response;
    });
  }
  
  
  deleteDepartment(department_id : number){
    if(confirm("Are you sure you want to delete this department !!!")){
      this.departmentService.delete(department_id).subscribe(()=>{
        alert("Department Deleted Successfully");
        window.location.reload();
      });
    }
  }
  
  createDepartment(){
    const newDepartment = {
      department_id : Math.floor(Math.random() * 1000),
      department_name : this.newDepartment.department_name,
      budget : this.newDepartment.budget,
      description : this.newDepartment.description,
      contact_info : this.newDepartment.contact_info,
      head_of_department : this.newDepartment.head_of_department
    }
    this.departmentService.create(newDepartment).subscribe(()=>{
      alert("Department Created Successfully");
      window.location.reload();
    });
  }
  
  modifyDepartment(){
    this.departmentService.update(this.newDepartment).subscribe(()=>{
      alert("Department Updated Successfully");
      window.location.reload();
    })
  }
  
  openModel(department: Department = new Department()){
    if(department.department_id == 0){
      this.newDepartment =  new Department();
      this.creatingMode = true;

    }else{
      this.creatingMode = false;
      this.newDepartment = department;
    }
  }
}