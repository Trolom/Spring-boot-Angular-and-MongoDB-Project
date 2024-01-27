import { Component } from '@angular/core';
import { SensorService } from '../../Services/sensor.service';
import { TimeActiveService } from '../../Services/time-active.service';
import { Sensor } from '../../models/sensor'
import { TimeActive } from '../../models/time-active';


@Component({
  selector: 'app-time-active',
  templateUrl: './time-active.component.html',
  styleUrls: ['./time-active.component.css']
})
export class TimeActiveComponent {
  sensorIdVar: number;
  timeActiveList : TimeActive[] = [];
  sensorList : Sensor[] = [];
  newTimeActive : TimeActive = new TimeActive();
  creatingMode : boolean = true;
  start_time_string : string = "";
  end_time_string : string = "";


  constructor(private timeActiveService : TimeActiveService,
              private sensorService : SensorService){
	this.sensorIdVar = 0;
    this.getAllTimeActives();
    this.getAllSensors();
  }
  
  parseDateString(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [month, day, year] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    
    return new Date(year, month - 1, day, hours, minutes);
  }
  
  getAllTimeActives(){
    this.timeActiveService.getAll().subscribe((response : TimeActive[])=>{
      this.timeActiveList = response;
    });
  }
  
  getAllSensors(){
    this.sensorService.getAll().subscribe((response : Sensor[])=>{
      this.sensorList = response;
    })
  }
  
  modifyTimeActive(){
    this.timeActiveService.update(this.newTimeActive).subscribe(()=>{
      alert("TimeActive Updated Successfully");
      window.location.reload();
    })
  }
  
  createTimeActive() {
    this.sensorService.get(this.sensorIdVar).subscribe((sensor: Sensor) => {
      const newTimeActive = {
      	timeActive_id: Math.floor(Math.random() * 1000),
      	start_time: this.parseDateString(this.start_time_string),
      	end_time: this.parseDateString(this.end_time_string),
      	status: this.newTimeActive.status,
      	total_time: this.newTimeActive.total_time,
      	sensor: sensor
      };

    this.timeActiveService.create(newTimeActive).subscribe(() => {
      alert("TimeActive Added Successfully");
      window.location.reload();
    });
  });
}

  deleteTimeActive(timeActive_id : number){
    if(confirm("Are you sure you want to delete this timeActive !!!")){
      this.timeActiveService.delete(timeActive_id).subscribe(()=>{
        alert("TimeActive Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(timeActive: TimeActive = new TimeActive()) {
  if (timeActive.timeActive_id === 0) {
    this.newTimeActive = new TimeActive();
    this.sensorIdVar = this.sensorList.length > 0 ? this.sensorList[0].sensor_id : 0;
    this.creatingMode = true;
    this.start_time_string = "";
    this.end_time_string =  "";
    
  } else {
    this.creatingMode = false;
    this.newTimeActive = timeActive;
  }
}

}