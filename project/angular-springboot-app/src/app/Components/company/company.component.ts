import { Component } from '@angular/core';
import { AddressService } from '../../Services/address.service';
import { CompanyService } from '../../Services/company.service';
import { Address } from '../../models/address'
import { Company } from '../../models/company';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  addressIdVar: number;
  companyList : Company[] = [];
  addressList : Address[] = [];
  newCompany : Company = new Company();
  creatingMode : boolean = true;


  constructor(private companyService : CompanyService,
              private addressService : AddressService){
	this.addressIdVar = 0;
    this.getAllCompanys();
    this.getAllAddresss();
  }
  
  getAllCompanys(){
    this.companyService.getAll().subscribe((response : Company[])=>{
      this.companyList = response;
    });
  }
  
  getAllAddresss(){
    this.addressService.getAll().subscribe((response : Address[])=>{
      this.addressList = response;
    })
  }
  
  modifyCompany(){
    this.companyService.update(this.newCompany).subscribe(()=>{
      alert("Company Updated Successfully");
      window.location.reload();
    })
  }
  
  createCompany() {
  	this.addressService.get(this.addressIdVar).subscribe((address: Address) => {
      const newCompany = {
      	company_id: Math.floor(Math.random() * 1000),
      	name: this.newCompany.name,
      	website: this.newCompany.website,
      	address: address
      };

    this.companyService.create(newCompany).subscribe(() => {
      alert("Company Added Successfully");
      window.location.reload();
      });
    });
  }

  deleteCompany(company_id : number){
    if(confirm("Are you sure you want to delete this company !!!")){
      this.companyService.delete(company_id).subscribe(()=>{
        alert("Company Deleted Successfully");
        window.location.reload();
      });
    }
  }

  openModel(company: Company = new Company()) {
  if (company.company_id === 0) {
    this.newCompany = new Company();
    this.addressIdVar = this.addressList.length > 0 ? this.addressList[0].address_id : 0;
    this.creatingMode = true;
    
  } else {
    this.creatingMode = false;
    this.newCompany = company;
  }
}

}