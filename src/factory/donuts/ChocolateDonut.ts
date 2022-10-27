import { IDonut } from "../interfaces.js";
import { Donut } from "./Donut.js";

export class ChocolateDonut extends Donut implements IDonut {
  eat(): void {
    console.log("You are eating chocolate donut");
  }
}
