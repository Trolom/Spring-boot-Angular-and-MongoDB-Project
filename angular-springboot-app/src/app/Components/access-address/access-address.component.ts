import { Component } from '@angular/core';
import { SensorService } from '../../Services/sensor.service';
import { AccessAddressService } from '../../Services/access-address.service';
import { Sensor } from '../../models/sensor'
import { AccessAddress } from '../../models/access-address';


@Component({
  selector: 'app-accessAddress',
  templateUrl: './access-address.component.html',
  styleUrls: ['./access-address.component.css']
})
export class AccessAddressComponent {
	
  sensorIdVar: number;
  accessAddressList : AccessAddress[] = [];
  sensorList : Sensor[] = [];
  newAccessAddress : AccessAddress = new AccessAddress();
  creatingMode : boolean = true;


  constructor(private accessAddressService : AccessAddressService,
              private sensorService : SensorService){
	this.sensorIdVar = 0;
    this.getAllAccessAddresss();
    this.getAllSensors();
  }
  
  getAllAccessAddresss(){
    this.accessAddressService.getAll().subscribe((response : AccessAddress[])=>{
      this.accessAddressList = response;
    });
  }
  
  getAllSensors(){
    this.sensorService.getAll().subscribe((response : Sensor[])=>{
      this.sensorList = response;
    })
  }
  
  modifyAccessAddress(){
    this.accessAddressService.update(this.newAccessAddress).subscribe(()=>{
      alert("AccessAddress Updated Successfully");
      window.location.reload();
    })
  }
  
  createAccessAddress() {
  this.sensorService.get(this.sensorIdVar).subscribe((sensor: Sensor) => {
    const newAccessAddress: AccessAddress = {
      accessAddress_id: Math.floor(Math.random() * 1000),
      host: this.newAccessAddress.host,
      port: this.newAccessAddress.port,
      ap: this.newAccessAddress.ap,
      sensor: sensor
    };

    this.accessAddressService.create(newAccessAddress).subscribe(() => {
      alert("AccessAddress Added Successfully");
      window.location.reload();
    });
  });
}

  deleteAccessAddress(accessAddress_id : number){
    if(confirm("Are you sure you want to delete this accessAddress !!!")){
      this.accessAddressService.delete(accessAddress_id).subscribe(()=>{
        alert("AccessAddress Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(accessAddress: AccessAddress = new AccessAddress()) {
  if (accessAddress.accessAddress_id === 0) {
    this.newAccessAddress = new AccessAddress();
    this.sensorIdVar = this.sensorList.length > 0 ? this.sensorList[0].sensor_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newAccessAddress = accessAddress;
    
  }
}

}