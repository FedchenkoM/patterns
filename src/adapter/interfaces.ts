import { Phones } from "./types.js";

export interface ICharge {
  model: Phones;
  charging(): string;
}

export interface IChargeAdapter extends ICharge {
  model: Phones;
  charge: ICharge;
}
