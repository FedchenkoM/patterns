import { BrasilianFootballAcademy } from "./footballAcademy/BrasilianFootballAcademy.js";
import { Nation } from "./enums.js";
import { BritishFootballAcademy } from "./footballAcademy/BritishFootballAcademy.js";
import { FootballAcademy } from "./footballAcademy/FootballAcademy.js";

export class FootballWorld {

  createAcademy(nation: Nation): FootballAcademy {
    switch (nation) {
      case Nation.Brasil:
        return new BrasilianFootballAcademy();
      case Nation.British:
        return new BritishFootballAcademy();
      default:
        return new BritishFootballAcademy();
    }
  }
}
