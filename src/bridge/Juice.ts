import { IFruitJuice, IJuice } from "./interfaces.js";

export class Juice implements IJuice {
  fruit: IFruitJuice;
  constructor(fruit: IFruitJuice) {
    this.fruit = fruit;
  }
  squeeze(): void {
    console.log(this.fruit.getFruit());
  }
}