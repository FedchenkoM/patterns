import { BrasilianFootballPlayer } from "../footballPlayers/BrasilianFootballPlayer.js";
import { IFootballPlayer } from "../interfaces.js";
import { FootballAcademy } from "./FootballAcademy.js";

export class BrasilianFootballAcademy extends FootballAcademy {
  trainPlayers(): IFootballPlayer {
    return new BrasilianFootballPlayer();
  }
}
