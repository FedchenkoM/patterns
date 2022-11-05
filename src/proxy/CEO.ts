import { Company } from './Company.js';
import { ICEO } from './interfaces.js';

export class CEO implements ICEO {
  company: Company;
  busy: boolean;
  constructor(c: Company) {
    this.company = c;
    this.busy = true;
  }

  get isBusy(): boolean {
    return this.busy;
  }

  set isBusy(isBusy: boolean) {
    this.busy = isBusy;
  }

  makeDeal(deal: string): void {
    console.log('CEO deal');
    Company.addDeal(deal);
  }

  donation(): void {
    console.log('CEO donate');
    this.company.makeDonation();
  }
}