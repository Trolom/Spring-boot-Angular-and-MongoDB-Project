import { Employee } from "./employee";


export class TrainingCertificate {
  trainingCertificate_id: number;
  title: string;
  completion_date: Date;
  employee: Employee;

  constructor() {
    this.trainingCertificate_id = 0;
    this.title = '';
    this.completion_date = new Date();
    this.employee = new Employee();
  }
}
