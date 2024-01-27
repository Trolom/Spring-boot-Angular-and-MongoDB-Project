import { Component } from '@angular/core';
import { SensorService } from '../../Services/sensor.service';
import { ManufacturerService } from '../../Services/manufacturer.service';
import { Sensor } from '../../models/sensor'
import { Manufacturer } from '../../models/manufacturer';


@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent {
  sensorIdVar: number;
  manufacturerList : Manufacturer[] = [];
  sensorList : Sensor[] = [];
  newManufacturer : Manufacturer = new Manufacturer();
  creatingMode : boolean = true;


  constructor(private manufacturerService : ManufacturerService,
              private sensorService : SensorService){
	this.sensorIdVar = 0;
    this.getAllManufacturers();
    this.getAllSensors();
  }
  
  getAllManufacturers(){
    this.manufacturerService.getAll().subscribe((response : Manufacturer[])=>{
      this.manufacturerList = response;
    });
  }
  
  getAllSensors(){
    this.sensorService.getAll().subscribe((response : Sensor[])=>{
      this.sensorList = response;
    })
  }
  
  modifyManufacturer(){
    this.manufacturerService.update(this.newManufacturer).subscribe(()=>{
      alert("Manufacturer Updated Successfully");
      window.location.reload();
    })
  }
  

  
createManufacturer() {
  this.sensorService.get(this.sensorIdVar).subscribe((sensor: Sensor) => {
    const newManufacturer = {
      manufacturer_id: Math.floor(Math.random() * 1000),
      quantity: this.newManufacturer.quantity,
      sensor: sensor
    };

    this.manufacturerService.create(newManufacturer).subscribe(() => {
      alert("Manufacturer Added Successfully");
      window.location.reload();
    });
  });
}

  deleteManufacturer(manufacturer_id : number){
    if(confirm("Are you sure you want to delete this manufacturer !!!")){
      this.manufacturerService.delete(manufacturer_id).subscribe(()=>{
        alert("Manufacturer Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(manufacturer: Manufacturer = new Manufacturer()) {
  if (manufacturer.manufacturer_id === 0) {
    this.newManufacturer = new Manufacturer();
    this.sensorIdVar = this.sensorList.length > 0 ? this.sensorList[0].sensor_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newManufacturer = manufacturer;
  }
}

}