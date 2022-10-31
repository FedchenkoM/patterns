import { ICityCar } from "./../interfaces.js";
export class CityCar implements ICityCar {
  makeGranta(): string {
    return "Granta created";
  }
  makeVesta(): string {
    return "Vesta created";
  }
}
