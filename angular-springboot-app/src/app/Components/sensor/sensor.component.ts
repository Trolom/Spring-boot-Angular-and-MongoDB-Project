import { Component } from '@angular/core';
import { TypeService } from '../../Services/type.service';
import { SensorService } from '../../Services/sensor.service';
import { Type } from '../../models/type'
import { Sensor } from '../../models/sensor';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent {
  typeIdVar: number;
  sensorList : Sensor[] = [];
  typeList : Type[] = [];
  newSensor : Sensor = new Sensor();
  creatingMode : boolean = true;


  constructor(private sensorService : SensorService,
              private typeService : TypeService){
	this.typeIdVar = 0;
    this.getAllSensors();
    this.getAllTypes();
  }
  
  getAllSensors(){
    this.sensorService.getAll().subscribe((response : Sensor[])=>{
      this.sensorList = response;
    });
  }
  
  getAllTypes(){
    this.typeService.getAll().subscribe((response : Type[])=>{
      this.typeList = response;
    })
  }
  
  modifySensor(){
    this.sensorService.update(this.newSensor).subscribe(()=>{
      alert("Sensor Updated Successfully");
      window.location.reload();
    })
  }
  
  createSensor() {
    this.typeService.get(this.typeIdVar).subscribe((type: Type) => {
      const newSensor = {
      	sensor_id: Math.floor(Math.random() * 1000),
      	value: this.newSensor.value,
      	version: this.newSensor.version,
      	type: type
      };

    this.sensorService.create(newSensor).subscribe(() => {
      alert("Sensor Added Successfully");
      window.location.reload();
    });
  });
 }

  deleteSensor(sensor_id : number){
    if(confirm("Are you sure you want to delete this sensor !!!")){
      this.sensorService.delete(sensor_id).subscribe(()=>{
        alert("Sensor Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(sensor: Sensor = new Sensor()) {
  if (sensor.sensor_id === 0) {
    this.newSensor = new Sensor();
    this.typeIdVar = this.typeList.length > 0 ? this.typeList[0].type_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newSensor = sensor;
  }
}

}