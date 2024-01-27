import { City } from "./city";



export class Address {
  address_id: number;
  street: string;
  number: number;
  is_HQ: boolean;
  city: City;

  constructor() {
    this.address_id = 0;
    this.street = '';
    this.number = 0;
    this.is_HQ = false;
    this.city = new City();
  }
}
