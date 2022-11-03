import { MatryoshkaSize, MatryoshkaWeight } from "./enums.js";

export interface IMatryoshka {
  size: MatryoshkaSize
  weight: MatryoshkaWeight
  getSize(): MatryoshkaSize
  getWeight(): MatryoshkaWeight
}
