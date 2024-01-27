import { Component } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectAdminService } from '../../Services/project-admin.service';
import { Projects } from '../../models/projects'
import { ProjectAdmin } from '../../models/project-admin';


@Component({
  selector: 'app-projectadmins',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent {
  projectsIdVar: number;
  projectAdminList : ProjectAdmin[] = [];
  projectsList : Projects[] = [];
  newProjectAdmin : ProjectAdmin = new ProjectAdmin();
  creatingMode : boolean = true;


  constructor(private projectAdminService : ProjectAdminService,
              private projectsService : ProjectsService){
	this.projectsIdVar = 0;
    this.getAllProjectAdmins();
    this.getAllProjectss();
  }
  
  getAllProjectAdmins(){
    this.projectAdminService.getAll().subscribe((response : ProjectAdmin[])=>{
      this.projectAdminList = response;
    });
  }
  
  getAllProjectss(){
    this.projectsService.getAll().subscribe((response : Projects[])=>{
      this.projectsList = response;
    })
  }
  
  modifyProjectAdmin(){
    this.projectAdminService.update(this.newProjectAdmin).subscribe(()=>{
      alert("ProjectAdmin Updated Successfully");
      window.location.reload();
    })
  }
  
  createProjectAdmin() {
    this.projectsService.get(this.projectsIdVar).subscribe((projects: Projects) => {
      const newProjectAdmin = {
      	projectAdmin_id: Math.floor(Math.random() * 1000),
      	name: this.newProjectAdmin.name,
      	project: projects
      };

    this.projectAdminService.create(newProjectAdmin).subscribe(() => {
      alert("ProjectAdmin Added Successfully");
      window.location.reload();
    });
  });
}


  deleteProjectAdmin(projectAdmin_id : number){
    if(confirm("Are you sure you want to delete this projectAdmin !!!")){
      this.projectAdminService.delete(projectAdmin_id).subscribe(()=>{
        alert("ProjectAdmin Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(projectAdmin: ProjectAdmin = new ProjectAdmin()) {
  if (projectAdmin.projectAdmin_id === 0) {
    this.newProjectAdmin = new ProjectAdmin();
    this.projectsIdVar = this.projectsList.length > 0 ? this.projectsList[0].projects_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newProjectAdmin = projectAdmin;
  }
}

}