import { Component } from '@angular/core';
import { CountryService } from '../../Services/country.service';
import { Country } from '../../models/country';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  countryList : Country[] = [];
  newCountry : Country = new Country();
  creatingMode : boolean = true;
  
  
  constructor(private countryService : CountryService){
    this.getAllCountrys();
  }
  
  getAllCountrys(){
    this.countryService.getAll().subscribe((response : Country[])=>{
      this.countryList = response;
    });
  }
  
  deleteCountry(country_id : number){
    if(confirm("Are you sure you want to delete this country !!!")){
      this.countryService.delete(country_id).subscribe(()=>{
        alert("Country Deleted Successfully");
        window.location.reload();
      });
    }
  }
  
  createCountry(){
    const newCountry = {
      country_id : Math.floor(Math.random() * 1000),
      name : this.newCountry.name,
      government_type : this.newCountry.government_type,
      continent : this.newCountry.continent
    }
    this.countryService.create(newCountry).subscribe(()=>{
      alert("Country Created Successfully");
      window.location.reload();
    });
  }
  
  modifyCountry(){
    this.countryService.update(this.newCountry).subscribe(()=>{
      alert("Country Updated Successfully");
      window.location.reload();
    })
  }
  
  
  openModel(country: Country = new Country()){
    if(country.country_id == 0){
      this.newCountry = new Country();
      
    }else{
      this.creatingMode = false;
      this.newCountry = country;
    }
  }
}