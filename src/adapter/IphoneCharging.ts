import { IOSPhone } from "./enums.js";
import { ICharge } from "./interfaces.js";

export class IOS implements ICharge {
  model: IOSPhone;
  constructor(model: IOSPhone) {
    this.model = model;
  }
  charging(): string {
    return `${this.model} charging`;
  }
}
