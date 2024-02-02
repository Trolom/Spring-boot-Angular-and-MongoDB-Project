import { Component } from '@angular/core';
import { DepartmentService } from '../../Services/department.service';
import { FieldService } from '../../Services/field.service';
import { Department } from '../../models/department'
import { Field } from '../../models/field';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  departmentIdVar: number;
  fieldList : Field[] = [];
  departmentList : Department[] = [];
  newField : Field = new Field();
  creatingMode : boolean = true;


  constructor(private fieldService : FieldService,
              private departmentService : DepartmentService){
	this.departmentIdVar = 0;
    this.getAllFields();
    this.getAllDepartments();
  }
  
  getAllFields(){
    this.fieldService.getAll().subscribe((response : Field[])=>{
      this.fieldList = response;
    });
  }
  
  getAllDepartments(){
    this.departmentService.getAll().subscribe((response : Department[])=>{
      this.departmentList = response;
    })
  }
  
  modifyField(){
    this.fieldService.update(this.newField).subscribe(()=>{
      alert("Field Updated Successfully");
      window.location.reload();
    })
  }
  
  createField() {
    this.departmentService.get(this.departmentIdVar).subscribe((department: Department) => {
      const newField = {
      	field_id: Math.floor(Math.random() * 1000),
      	name: this.newField.name,
      	department: department
      };

    this.fieldService.create(newField).subscribe(() => {
      alert("Field Added Successfully");
      window.location.reload();
    });
  });
}

  deleteField(field_id : number){
    if(confirm("Are you sure you want to delete this field !!!")){
      this.fieldService.delete(field_id).subscribe(()=>{
        alert("Field Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(field: Field = new Field()) {
  if (field.field_id === 0) {
    this.newField = new Field();
    this.departmentIdVar = this.departmentList.length > 0 ? this.departmentList[0].department_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newField = field;
  }
}

}