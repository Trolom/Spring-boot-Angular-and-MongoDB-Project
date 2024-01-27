import { Component } from '@angular/core';
import { TechnicianService } from '../../Services/technician.service';
import { Technician } from '../../models/technician';


@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent {
  technicianList : Technician[] = [];
  newTechnician : Technician = new Technician();
  creatingMode : boolean = true;
  
  
  constructor(private technicianService : TechnicianService){
    this.getAllTechnicians();
  }
  
  getAllTechnicians(){
    this.technicianService.getAll().subscribe((response : Technician[])=>{
      this.technicianList = response;
    });
  }
  
  deleteTechnician(technician_id : number){
    if(confirm("Are you sure you want to delete this technician !!!")){
      this.technicianService.delete(technician_id).subscribe(()=>{
        alert("Technician Deleted Successfully");
        window.location.reload();
      });
    }
  }
  
  createTechnician(){
    const newTechnician = {
      technician_id : Math.floor(Math.random() * 1000),
      name : this.newTechnician.name,
      email : this.newTechnician.email,
      responsibilities : this.newTechnician.responsibilities,
    }
    this.technicianService.create(newTechnician).subscribe(()=>{
      alert("Technician Created Successfully");
      window.location.reload();
    });
  }
  
  modifyTechnician(){
    this.technicianService.update(this.newTechnician).subscribe(()=>{
      alert("Technician Updated Successfully");
      window.location.reload();
    })
  }
  
  
  openModel(technician: Technician = new Technician()){
    if(technician.technician_id == 0){
      this.newTechnician =  new Technician();
      this.creatingMode = true;

    }else{
      this.creatingMode = false;
      this.newTechnician = technician;
    }
  }
}