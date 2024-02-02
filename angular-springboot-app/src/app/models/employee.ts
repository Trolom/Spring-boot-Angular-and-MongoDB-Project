import { Department } from "./department";

export class Employee {

  employee_id: number;
  name: string;
  position: string;
  contract_details: string;
  department: Department;

  constructor() {
    this.employee_id = 0;
    this.name = "";
    this.position = "";
    this.contract_details = "";
    this.department = new Department();
  }
}
