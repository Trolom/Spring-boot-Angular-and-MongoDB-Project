import { Component } from '@angular/core';
import { SensorService } from '../../Services/sensor.service';
import { MetricsService } from '../../Services/metrics.service';
import { Sensor } from '../../models/sensor'
import { Metrics } from '../../models/metrics';
import { NgxMaskDirective } from 'ngx-mask';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {
  sensorIdVar: number;
  metricsList : Metrics[] = [];
  sensorList : Sensor[] = [];
  newMetrics : Metrics = new Metrics();
  creatingMode : boolean = true;
  timestamp_string : string = "";



  constructor(private metricsService : MetricsService,
              private sensorService : SensorService){
	this.sensorIdVar = 0;
    this.getAllMetricss();
    this.getAllSensors();
  }
  
  parseDateString(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [month, day, year] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    
    return new Date(year, month - 1, day, hours, minutes);
  }
  
  getAllMetricss(){
    this.metricsService.getAll().subscribe((response : Metrics[])=>{
      this.metricsList = response;
    });
  }
  
  getAllSensors(){
    this.sensorService.getAll().subscribe((response : Sensor[])=>{
      this.sensorList = response;
    })
  }
  
  modifyMetrics(){
    this.metricsService.update(this.newMetrics).subscribe(()=>{
      alert("Metrics Updated Successfully");
      window.location.reload();
    })
  }
  
  createMetrics() {
  this.sensorService.get(this.sensorIdVar).subscribe((sensor: Sensor) => {
    const newMetrics = {
      metrics_id: Math.floor(Math.random() * 1000),
      measurement: this.newMetrics.measurement,
      unit_measurement: this.newMetrics.unit_measurement,
      timestamp: this.parseDateString(this.timestamp_string),
      sensor: sensor
    };

    this.metricsService.create(newMetrics).subscribe(() => {
      alert("Metrics Added Successfully");
      window.location.reload();
    });
  });
}

  deleteMetrics(metrics_id : number){
    if(confirm("Are you sure you want to delete this metrics !!!")){
      this.metricsService.delete(metrics_id).subscribe(()=>{
        alert("Metrics Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(metrics: Metrics = new Metrics()) {
  if (metrics.metrics_id === 0) {
    this.newMetrics = new Metrics();
    this.sensorIdVar = this.sensorList.length > 0 ? this.sensorList[0].sensor_id : 0;
    this.creatingMode = true;
    this.timestamp_string =  "";

    
  } else {
    this.creatingMode = false;
    this.newMetrics = metrics;
  }
}

}