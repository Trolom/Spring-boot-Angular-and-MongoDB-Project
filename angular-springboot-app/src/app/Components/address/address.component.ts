import { Component } from '@angular/core';
import { CityService } from '../../Services/city.service';
import { AddressService } from '../../Services/address.service';
import { City } from '../../models/city'
import { Address } from '../../models/address';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  cityIdVar: number;
  addressList : Address[] = [];
  cityList : City[] = [];
  newAddress : Address = new Address();
  creatingMode : boolean = true;


  constructor(private addressService : AddressService,
              private cityService : CityService){
	this.cityIdVar = 0;
    this.getAllAddresss();
    this.getAllCities();
  }
  
  getAllAddresss(){
    this.addressService.getAll().subscribe((response : Address[])=>{
      this.addressList = response;
    });
  }
  
  getAllCities(){
    this.cityService.getAll().subscribe((response : City[])=>{
      this.cityList = response;
    })
  }
  
  modifyAddress(){
    this.addressService.update(this.newAddress).subscribe(()=>{
      alert("Address Updated Successfully");
      window.location.reload();
    })
  }
  
  createAddress() {
    this.cityService.get(this.cityIdVar).subscribe((city: City) => {
      const newAddress = {
      	address_id: Math.floor(Math.random() * 1000),
      	street: this.newAddress.street,
      	number: this.newAddress.number,
      	is_HQ: this.newAddress.is_HQ,
      	city: city
      };

    this.addressService.create(newAddress).subscribe(() => {
      alert("Address Added Successfully");
      window.location.reload();
    },
    (error) => {
    console.error("Error creating address:", error);
  	});
  });
}

  deleteAddress(address_id : number){
    if(confirm("Are you sure you want to delete this address !!!")){
      this.addressService.delete(address_id).subscribe(()=>{
        alert("Address Deleted Successfully");
        window.location.reload();
      });
    }
  }
  openModel(address: Address = new Address()) {
  if (address.address_id === 0) {
    this.newAddress = new Address();
    this.cityIdVar = this.cityList.length > 0 ? this.cityList[0].city_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newAddress = address;
    
  }
}

}