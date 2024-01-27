import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { TrainingCertificateService } from '../../Services/training-certificate.service';
import { Employee } from '../../models/employee'
import { TrainingCertificate } from '../../models/training-certificate';
import { NgxMaskDirective } from 'ngx-mask';


@Component({
  selector: 'app-training-certificate',
  templateUrl: './training-certificate.component.html',
  styleUrls: ['./training-certificate.component.css']
})
export class TrainingCertificateComponent {
  employeeIdVar: number;
  trainingCertificateList : TrainingCertificate[] = [];
  employeeList : Employee[] = [];
  newTrainingCertificate : TrainingCertificate = new TrainingCertificate();
  creatingMode : boolean = true;
  completion_date_string : string = "";



  constructor(private trainingCertificateService : TrainingCertificateService,
              private employeeService : EmployeeService){
	this.employeeIdVar = 0;
    this.getAllTrainingCertificates();
    this.getAllEmployees();
  }
  
  parseDateString(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [month, day, year] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    
    return new Date(year, month - 1, day, hours, minutes);
  }
  
  
  getAllTrainingCertificates(){
    this.trainingCertificateService.getAll().subscribe((response : TrainingCertificate[])=>{
      this.trainingCertificateList = response;
    });
  }
  
  getAllEmployees(){
    this.employeeService.getAll().subscribe((response : Employee[])=>{
      this.employeeList = response;
    })
  }
  
  modifyTrainingCertificate(){
    this.trainingCertificateService.update(this.newTrainingCertificate).subscribe(()=>{
      alert("TrainingCertificate Updated Successfully");
      window.location.reload();
    })
  }
  
  createTrainingCertificate() {
    this.employeeService.get(this.employeeIdVar).subscribe((employee: Employee) => {
      const newTrainingCertificate = {
      	trainingCertificate_id: Math.floor(Math.random() * 1000),
      	title: this.newTrainingCertificate.title,
      	completion_date: this.parseDateString(this.completion_date_string),
      	employee: employee
      };

    this.trainingCertificateService.create(newTrainingCertificate).subscribe(() => {
      alert("TrainingCertificate Added Successfully");
      window.location.reload();
    });
  });
}

  deleteTrainingCertificate(trainingCertificate_id : number){
    if(confirm("Are you sure you want to delete this trainingCertificate !!!")){
      this.trainingCertificateService.delete(trainingCertificate_id).subscribe(()=>{
        alert("TrainingCertificate Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(trainingCertificate: TrainingCertificate = new TrainingCertificate()) {
  if (trainingCertificate.trainingCertificate_id === 0) {
    this.newTrainingCertificate = new TrainingCertificate();
    this.employeeIdVar = this.employeeList.length > 0 ? this.employeeList[0].employee_id : 0;
    this.creatingMode = true;
    this.completion_date_string =  "";
    
  } else {
    this.creatingMode = false;
    this.newTrainingCertificate = trainingCertificate;
  }
}

}