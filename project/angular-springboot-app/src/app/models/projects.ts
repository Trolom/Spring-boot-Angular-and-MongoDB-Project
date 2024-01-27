import { LocationProject } from "./location-project";

export class Projects {
  projects_id: number;
  budget: number;
  internal: boolean; 
  name: string;
  still_going: boolean; 
  locationProject: LocationProject;

  constructor() {
    this.projects_id = 0;
    this.budget = 0;
    this.internal = false;
    this.name = '';
    this.still_going = false;
    this.locationProject = new LocationProject();
  }
}