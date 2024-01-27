import { Country } from "./country";

export class City {
  city_id: number;
  name: string;
  size: number;
  country: Country;

  constructor() {
    this.city_id = 0;
    this.name = '';
    this.size = 0;
    this.country = new Country(); 
  }
}