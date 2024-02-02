import { Component } from '@angular/core';
import { LocationProjectService } from '../../Services/location-project.service';
import { LocationProject } from '../../models/location-project';


@Component({
  selector: 'app-location-project',
  templateUrl: './location-project.component.html',
  styleUrls: ['./location-project.component.css']
})
export class LocationProjectComponent {
  locationProjectList : LocationProject[] = [];
  newLocationProject : LocationProject = new LocationProject();
  creatingMode : boolean = true;
  
  
  constructor(private locationProjectService : LocationProjectService){
    this.getAllLocationProjects();
  }
  
  getAllLocationProjects(){
    this.locationProjectService.getAll().subscribe((response : LocationProject[])=>{
      this.locationProjectList = response;
    });
  }
  
  deleteLocationProject(locationProject_id : number){
    if(confirm("Are you sure you want to delete this locationProject !!!")){
      this.locationProjectService.delete(locationProject_id).subscribe(()=>{
        alert("LocationProject Deleted Successfully");
        window.location.reload();
      });
    }
  }
  
  createLocationProject(){
    const newLocationProject = {
      locationProject_id : Math.floor(Math.random() * 1000),
      climate : this.newLocationProject.climate,
      description : this.newLocationProject.description,
      resources : this.newLocationProject.resources,
    }
    this.locationProjectService.create(newLocationProject).subscribe(()=>{
      alert("LocationProject Created Successfully");
      window.location.reload();
    });
  }
  
  
  modifyLocationProject(){
    this.locationProjectService.update(this.newLocationProject).subscribe(()=>{
      alert("LocationProject Updated Successfully");
      window.location.reload();
    })
  }
  
  
  openModel(locationProject: LocationProject = new LocationProject()){
    if(locationProject.locationProject_id == 0){
      this.newLocationProject =  new LocationProject();
      this.creatingMode = true;

      
    }else{
      this.creatingMode = false;
      this.newLocationProject = locationProject;
    }
  }
}