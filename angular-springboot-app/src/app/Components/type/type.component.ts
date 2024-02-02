import { Component } from '@angular/core';
import { TypeService } from '../../Services/type.service';
import { Type } from '../../models/type';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {
  typeList : Type[] = [];
  newType : Type = new Type();
  creatingMode : boolean = true;
  
  
  constructor(private typeService : TypeService){
    this.getAllTypes();
  }
  
  getAllTypes(){
    this.typeService.getAll().subscribe((response : Type[])=>{
      this.typeList = response;
    });
  }
  
  
  deleteType(type_id : number){
    if(confirm("Are you sure you want to delete this type !!!")){
      this.typeService.delete(type_id).subscribe(()=>{
        alert("Type Deleted Successfully");
        window.location.reload();
      });
    }
  }
  
  createType(){
    const newType = {
      type_id : Math.floor(Math.random() * 1000),
      name : this.newType.name,
      description : this.newType.description,
    }
    this.typeService.create(newType).subscribe(()=>{
      alert("Type Created Successfully");
      window.location.reload();
    });
  }
  
  
  modifyType(){
    this.typeService.update(this.newType).subscribe(()=>{
      alert("Type Updated Successfully");
      window.location.reload();
    })
  }
  
  
  openModel(type: Type = new Type()){
    if(type.type_id == 0){
      this.newType = new Type();
      this.creatingMode = true;

    }else{
      this.creatingMode = false;
      this.newType = type;
    }
  }
}