import { Projects } from "./projects";


export class ProjectAdmin {
  projectAdmin_id: number;
  name: string;
  project: Projects;

  constructor() {
    this.projectAdmin_id = 0;
    this.name = '';
    this.project = new Projects();
  }
}
