import { IMan } from './interfaces.js';
import { Edc, Phisique } from "./enums.js";

export class Man implements IMan {
  height: number;
  weight: number;
  edc: Edc;
  power: Phisique;
  constructor(height: number, weight: number, edc: Edc, power: Phisique) {
    this.height = height;
    this.weight = weight;
    this.edc = edc;
    this.power = power;
  }
  clone(): Man {
    return new Man(this.height, this.weight, this.edc, this.power);
  }
}
