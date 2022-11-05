import { Company } from './Company.js';
import { ICEO } from './interfaces.js';

export class CEOProxy implements ICEO {
  company: Company;
  CEO: ICEO;
  constructor(c: Company, C: ICEO) {
    this.company = c;
    this.CEO = C;
  }

  makeDeal(deal: string): void {
    if (this.CEO.isBusy) {
      Company.addDeal(deal);
      console.log('Proxy CEO deal');
    } else {
      this.CEO.makeDeal(deal);
    }
  }

  donation(): void {
    if (this.CEO.isBusy) {
      this.company.makeDonation();
      console.log('Proxy CEO donate');
    } else {
      this.CEO.donation();
    }
  }

  get isBusy(): boolean {
    return false;
  }
}