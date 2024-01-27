import { Department } from "./department";

export class Field {
  field_id: number;
  name: string;
  department: Department;

  constructor() {
    this.field_id = 0;
    this.name = '';
    this.department = new Department();
  }
}