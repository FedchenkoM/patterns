import { IDonut } from "../interfaces.js";
import { Donut } from "./Donut.js";

export class VanillaDonut extends Donut implements IDonut {
  eat(): void {
    console.log("You are eating vanila donut");
  }
}
