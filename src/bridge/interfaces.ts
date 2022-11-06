import { Fruits } from "./enums";

export interface IJuice {
  fruit: IFruitJuice;
  squeeze(): void;
}

export interface IFruitJuice {
  fruit: Fruits;
  getFruit(): string;
}