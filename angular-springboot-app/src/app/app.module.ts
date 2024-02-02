import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { AccessAddressComponent } from './Components/access-address/access-address.component';
import { AddressComponent } from './Components/address/address.component';
import { CityComponent } from './Components/city/city.component';
import { CompanyComponent } from './Components/company/company.component';
import { CountryComponent } from './Components/country/country.component';
import { LocationProjectComponent } from './Components/location-project/location-project.component';
import { ManufacturerComponent } from './Components/manufacturer/manufacturer.component';
import { MetricsComponent } from './Components/metrics/metrics.component';
import { ProjectAdminComponent } from './Components/project-admin/project-admin.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ReviewComponent } from './Components/review/review.component';
import { SensorComponent } from './Components/sensor/sensor.component';
import { SensorMaintenanceComponent } from './Components/sensor-maintenance/sensor-maintenance.component';
import { TechnicianComponent } from './Components/technician/technician.component';
import { TimeActiveComponent } from './Components/time-active/time-active.component';
import { TrainingCertificateComponent } from './Components/training-certificate/training-certificate.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DepartmentComponent } from './Components/department/department.component';
import { FieldComponent } from './Components/field/field.component';
import { TypeComponent } from './Components/type/type.component';


@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeComponent,
    DepartmentComponent,
    FieldComponent,
    TypeComponent,
    AccessAddressComponent,
    AddressComponent,
    CityComponent,
    CompanyComponent,
    CountryComponent,
    LocationProjectComponent,
    ManufacturerComponent,
    MetricsComponent,
    ProjectAdminComponent,
    ProjectsComponent,
    ReviewComponent,
    SensorComponent,
    SensorMaintenanceComponent,
    TechnicianComponent,
    TimeActiveComponent,
    TrainingCertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
