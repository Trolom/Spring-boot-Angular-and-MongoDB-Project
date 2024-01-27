import { Employee } from "./employee";

export class Review {
  review_id: number;
  performance_rating: number;
  areas_of_improvement: string;
  title: string;
  employee: Employee;

  constructor() {
    this.review_id = 0;
    this.performance_rating = 0;
    this.areas_of_improvement = '';
    this.title = '';
    this.employee = new Employee(); 
  }
}
