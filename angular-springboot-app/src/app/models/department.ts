export class Department {
	
  department_id: number;
  department_name: string;
  budget: number;
  description: string;
  contact_info: string;
  head_of_department: string;

  constructor() {
    this.department_id = 0;
    this.department_name = '';
    this.budget = 0;
    this.description = '';
    this.contact_info = '';
    this.head_of_department = '';
  }
}