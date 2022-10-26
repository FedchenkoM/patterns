import { IFootballPlayer } from "../interfaces.js";
import { BritishFootballPlayer } from "./../footballPlayers/BritishFootballPlayers.js";
import { FootballAcademy } from "./FootballAcademy.js";

export class BritishFootballAcademy extends FootballAcademy {
  trainPlayers(): IFootballPlayer {
    return new BritishFootballPlayer();
  }
}
