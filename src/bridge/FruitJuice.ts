import { Fruits } from "./enums.js";
import { IFruitJuice } from "./interfaces.js";

export class FruitJuice implements IFruitJuice {
  fruit: Fruits;
  constructor(fruit: Fruits) {
    this.fruit = fruit;
  }
  getFruit(): string {
    return this.fruit;
  }
}