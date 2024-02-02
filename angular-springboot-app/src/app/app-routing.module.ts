import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsComponent } from './Components/metrics/metrics.component';
import { ManufacturerComponent } from './Components/manufacturer/manufacturer.component';
import { LocationProjectComponent } from './Components/location-project/location-project.component';
import { CountryComponent } from './Components/country/country.component';
import { CityComponent } from './Components/city/city.component';
import { AccessAddressComponent } from './Components/access-address/access-address.component';
import { AddressComponent } from './Components/address/address.component';
import { CompanyComponent } from './Components/company/company.component';
import { ProjectAdminComponent } from './Components/project-admin/project-admin.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ReviewComponent } from './Components/review/review.component';
import { SensorComponent } from './Components/sensor/sensor.component';
import { SensorMaintenanceComponent } from './Components/sensor-maintenance/sensor-maintenance.component';
import { TechnicianComponent } from './Components/technician/technician.component';
import { TimeActiveComponent } from './Components/time-active/time-active.component';
import { TrainingCertificateComponent } from './Components/training-certificate/training-certificate.component';
import { FieldComponent } from './Components/field/field.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DepartmentComponent } from './Components/department/department.component';
import { TypeComponent } from './Components/type/type.component';


const routes: Routes = [
  { path: "accessaddress", component: AccessAddressComponent },
  { path: "address", component: AddressComponent },
  { path: "cities", component: CityComponent },
  { path: "countries", component: CountryComponent },
  { path: "companies", component: CompanyComponent },
  { path: "locationprojects", component: LocationProjectComponent },
  { path: "manufacturers", component: ManufacturerComponent },
  { path: "metrics", component: MetricsComponent },
  { path: "projectadmins", component: ProjectAdminComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "reviews", component: ReviewComponent },
  { path: "sensors", component: SensorComponent },
  { path: "sersorsmaintenance", component: SensorMaintenanceComponent },
  { path: "technicians", component: TechnicianComponent },
  { path: "timesactive", component: TimeActiveComponent },
  { path: "trainingcertificates", component: TrainingCertificateComponent },
  { path: "employees", component: EmployeeComponent },
  { path: "departments", component: DepartmentComponent },
  { path: "types", component: TypeComponent },
  { path: "fields", component: FieldComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
