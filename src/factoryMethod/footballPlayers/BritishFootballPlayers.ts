import { IFootballPlayer } from "../interfaces.js";

export class BritishFootballPlayer implements IFootballPlayer {
  trainByProgram(): void {
    console.log("British footballers work more on physical performance");
  }
  speak(): void {
    console.log("British footbalers speak in English");
  }
}
