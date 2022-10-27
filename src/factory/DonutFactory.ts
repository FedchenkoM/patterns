import { ChocolateDonut } from "./donuts/ChocolateDonut.js";
import { VanillaDonut } from "./donuts/VanillaDonut.js";
import { DonutType } from "./enums.js";
import { IDonut } from "./interfaces.js";

export class DonutFactory {
  public static getDonut(donutType: DonutType): IDonut {
    switch (donutType) {
      case DonutType.chocolate:
        return new ChocolateDonut(1200, "chocolate", 120);
      case DonutType.vanilla:
        return new VanillaDonut(1110, "vanilla", 125);
      default:
        return new VanillaDonut(1110, "vanilla", 125);
    }
  }
}
