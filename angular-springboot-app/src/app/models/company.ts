import { Address } from "./address";

export class Company {
  company_id: number;
  name: string;
  website: string;
  address: Address;

  constructor() {
    this.company_id = 0;
    this.name = '';
    this.website = '';
    this.address = new Address();
  }
}