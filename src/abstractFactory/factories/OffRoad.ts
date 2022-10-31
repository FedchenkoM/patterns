import { IOffRoad } from "./../interfaces.js";

export class OffRoad implements IOffRoad {
  makeNiva(): string {
    return "Niva created";
  }
  makeChevyNiva(): string {
    return "Chevy niva created";
  }
}
