export class Country {
  country_id: number;
  name: string;
  government_type: string;
  continent: string;

  constructor() {
    this.country_id = 0;
    this.name = '';
    this.government_type = '';
    this.continent = ''
  }
}