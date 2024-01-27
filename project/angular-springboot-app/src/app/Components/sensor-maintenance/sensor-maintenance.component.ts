import { Component } from '@angular/core';
import { SensorService } from '../../Services/sensor.service';
import { SensorMaintenanceService } from '../../Services/sensor-maintenance.service';
import { Sensor } from '../../models/sensor'
import { SensorMaintenance } from '../../models/sensor-maintenance';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-sensor-maintenance',
  templateUrl: './sensor-maintenance.component.html',
  styleUrls: ['./sensor-maintenance.component.css']
})
export class SensorMaintenanceComponent {
  sensorIdVar: number;
  sensorMaintenanceList : SensorMaintenance[] = [];
  sensorList : Sensor[] = [];
  newSensorMaintenance : SensorMaintenance = new SensorMaintenance();
  creatingMode : boolean = true;
  installation_date_string : string = "";
  calibration_date_string : string = "";


  constructor(private sensorMaintenanceService : SensorMaintenanceService,
              private sensorService : SensorService){
	this.sensorIdVar = 0;
    this.getAllSensorMaintenances();
    this.getAllSensors();
  }
  
  parseDateString(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [month, day, year] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    
    return new Date(year, month - 1, day, hours, minutes);
  }
  
  
  getAllSensorMaintenances(){
    this.sensorMaintenanceService.getAll().subscribe((response : SensorMaintenance[])=>{
      this.sensorMaintenanceList = response;
    });
  }
  
  getAllSensors(){
    this.sensorService.getAll().subscribe((response : Sensor[])=>{
      this.sensorList = response;
    })
  }
  
  modifySensorMaintenance(){
    this.sensorMaintenanceService.update(this.newSensorMaintenance).subscribe(()=>{
      alert("SensorMaintenance Updated Successfully");
      window.location.reload();
    })
  }
  
  createSensorMaintenance() {
  this.sensorService.get(this.sensorIdVar).subscribe((sensor: Sensor) => {
    // Parse date strings before creating SensorMaintenance
    
    const newSensorMaintenance = {
      sensorMaintenance_id: Math.floor(Math.random() * 1000),
      installation_date: this.parseDateString(this.installation_date_string),
      calibration_date: this.parseDateString(this.calibration_date_string),
      status: this.newSensorMaintenance.status,
      maintenance_by: this.newSensorMaintenance.maintenance_by,
      sensor: sensor
    };

    this.sensorMaintenanceService.create(newSensorMaintenance).subscribe(() => {
      alert("SensorMaintenance Added Successfully");
      window.location.reload();
    });
  });
}

  deleteSensorMaintenance(sensorMaintenance_id : number){
    if(confirm("Are you sure you want to delete this sensorMaintenance !!!")){
      this.sensorMaintenanceService.delete(sensorMaintenance_id).subscribe(()=>{
        alert("SensorMaintenance Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(sensorMaintenance: SensorMaintenance = new SensorMaintenance()) {
  if (sensorMaintenance.sensorMaintenance_id === 0) {
    this.newSensorMaintenance = new SensorMaintenance();
    this.sensorIdVar = this.sensorList.length > 0 ? this.sensorList[0].sensor_id : 0;
    this.installation_date_string = "",
    this.calibration_date_string =  "",
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newSensorMaintenance = sensorMaintenance;
  }
}

}