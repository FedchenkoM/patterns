import { CityCar } from "./factories/CityCar.js";
import { OffRoad } from "./factories/OffRoad.js";
import { SportCar } from "./factories/SportCar.js";
import { ICityCar, IOffRoad, ISportCar } from "./interfaces.js";

export abstract class AvtoVAZ {
  static offRoadFactory(): IOffRoad {
    return new OffRoad();
  }
  static sportCarFactory(): ISportCar {
    return new SportCar();
  }
  static cityCar(): ICityCar {
    return new CityCar();
  }
}
