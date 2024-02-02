import { Component } from '@angular/core';
import { CountryService } from '../../Services/country.service';
import { CityService } from '../../Services/city.service';
import { Country } from '../../models/country'
import { City } from '../../models/city';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  countryIdVar: number;
  cityList : City[] = [];
  countryList : Country[] = [];
  newCity : City = new City();
  creatingMode : boolean = true;


  constructor(private cityService : CityService,
              private countryService : CountryService){
	this.countryIdVar = 0;
    this.getAllCitys();
    this.getAllCountrys();
  }
  
  getAllCitys(){
    this.cityService.getAll().subscribe((response : City[])=>{
      this.cityList = response;
    });
  }
  
  getAllCountrys(){
    this.countryService.getAll().subscribe((response : Country[])=>{
      this.countryList = response;
    })
  }
  
  modifyCity(){
    this.cityService.update(this.newCity).subscribe(()=>{
      alert("City Updated Successfully");
      window.location.reload();
    })
  }
  

  createCity() {
    this.countryService.get(this.countryIdVar).subscribe((country: Country) => {
      const newCity = {
      	city_id: Math.floor(Math.random() * 1000),
      	name: this.newCity.name,
      	size: this.newCity.size,
      	country: country
    };

    this.cityService.create(newCity).subscribe(() => {
      alert("City Added Successfully");
      window.location.reload();
    });
  });
}

  deleteCity(city_id : number){
    if(confirm("Are you sure you want to delete this city !!!")){
      this.cityService.delete(city_id).subscribe(()=>{
        alert("City Deleted Successfully");
        window.location.reload();
      });
    }
  }
  openModel(city: City = new City()) {
  if (city.city_id === 0) {
    this.newCity = new City();
    this.countryIdVar = this.countryList.length > 0 ? this.countryList[0].country_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newCity = city;
    
  }
}

}