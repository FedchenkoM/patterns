import { Android } from "./enums.js";
import { ICharge, IChargeAdapter } from "./interfaces.js";

export class AdapterAndroid implements IChargeAdapter {
  charge: ICharge;
  model: Android;
  constructor(c: ICharge, m: Android) {
    this.charge = c;
    this.model = m;
  }
  charging(): string {
    return `${this.model} charging`;
  }
}
