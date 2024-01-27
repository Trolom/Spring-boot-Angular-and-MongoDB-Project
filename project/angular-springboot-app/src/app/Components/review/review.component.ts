import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { ReviewService } from '../../Services/review.service';
import { Employee } from '../../models/employee'
import { Review } from '../../models/review';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  employeeIdVar: number;
  reviewList : Review[] = [];
  employeeList : Employee[] = [];
  newReview : Review = new Review();
  creatingMode : boolean = true;


  constructor(private reviewService : ReviewService,
              private employeeService : EmployeeService){
	this.employeeIdVar = 0;
    this.getAllReviews();
    this.getAllEmployees();
  }
  
  getAllReviews(){
    this.reviewService.getAll().subscribe((response : Review[])=>{
      this.reviewList = response;
    });
  }
  
  getAllEmployees(){
    this.employeeService.getAll().subscribe((response : Employee[])=>{
      this.employeeList = response;
    })
  }
  
  modifyReview(){
    this.reviewService.update(this.newReview).subscribe(()=>{
      alert("Review Updated Successfully");
      window.location.reload();
    })
  }
  
  createReview() {
    this.employeeService.get(this.employeeIdVar).subscribe((employee: Employee) => {
      const newReview = {
      	review_id: Math.floor(Math.random() * 1000),
      	title: this.newReview.title,
      	performance_rating: this.newReview.performance_rating,
      	areas_of_improvement: this.newReview.areas_of_improvement,
      	employee: employee
      };

    this.reviewService.create(newReview).subscribe(() => {
      alert("Review Added Successfully");
      window.location.reload();
    });
  });
}

  deleteReview(review_id : number){
    if(confirm("Are you sure you want to delete this review !!!")){
      this.reviewService.delete(review_id).subscribe(()=>{
        alert("Review Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(review: Review = new Review()) {
  if (review.review_id === 0) {
    this.newReview = new Review();
    this.employeeIdVar = this.employeeList.length > 0 ? this.employeeList[0].employee_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newReview = review;
  }
}

}