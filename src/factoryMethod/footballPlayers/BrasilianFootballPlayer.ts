import { IFootballPlayer } from "../interfaces.js";

export class BrasilianFootballPlayer implements IFootballPlayer {
  trainByProgram(): void {
    console.log("Brasilian footballers work more on technique performance");
  }
  speak(): void {
    console.log("Brasilian footbalers speak in Brasilian");
  }
}
