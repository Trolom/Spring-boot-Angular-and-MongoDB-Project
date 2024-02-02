import { Component } from '@angular/core';
import { LocationProjectService } from '../../Services/location-project.service';
import { ProjectsService } from '../../Services/projects.service';
import { LocationProject } from '../../models/location-project'
import { Projects } from '../../models/projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  locationProjectIdVar: number;
  projectsList : Projects[] = [];
  locationProjectList : LocationProject[] = [];
  newProjects : Projects = new Projects();
  creatingMode : boolean = true;


  constructor(private projectsService : ProjectsService,
              private locationProjectService : LocationProjectService){
	this.locationProjectIdVar = 0;
    this.getAllProjectss();
    this.getAllLocationProjects();
  }
  
  getAllProjectss(){
    this.projectsService.getAll().subscribe((response : Projects[])=>{
      this.projectsList = response;
    });
  }
  
  getAllLocationProjects(){
    this.locationProjectService.getAll().subscribe((response : LocationProject[])=>{
      this.locationProjectList = response;
    })
  }
  
  modifyProjects(){
    this.projectsService.update(this.newProjects).subscribe(()=>{
      alert("Projects Updated Successfully");
      window.location.reload();
    })
  }
  
  createProjects() {
    this.locationProjectService.get(this.locationProjectIdVar).subscribe((locationProject: LocationProject) => {
      const newProjects = {
      	projects_id: Math.floor(Math.random() * 1000),
      	name: this.newProjects.name,
      	budget: this.newProjects.budget,
      	internal: this.newProjects.internal,
      	still_going: this.newProjects.still_going,
      	locationProject: locationProject
      };

    this.projectsService.create(newProjects).subscribe(() => {
      alert("Projects Added Successfully");
      window.location.reload();
    });
  });
 }

  deleteProjects(projects_id : number){
    if(confirm("Are you sure you want to delete this projects !!!")){
      this.projectsService.delete(projects_id).subscribe(()=>{
        alert("Projects Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(projects: Projects = new Projects()) {
  if (projects.projects_id === 0) {
    this.newProjects = new Projects();
    this.locationProjectIdVar = this.locationProjectList.length > 0 ? this.locationProjectList[0].locationProject_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newProjects = projects;
  }
}

}