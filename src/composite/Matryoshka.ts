import { MatryoshkaSize, MatryoshkaWeight } from './enums.js';
import { IMatryoshka } from './interfaces.js';

export class Matryoshka implements IMatryoshka {
  weight: number;
  size: MatryoshkaSize;
  constructor(w: MatryoshkaWeight, s: MatryoshkaSize) {
    this.size = s
    this.weight = w
  }
  getSize(): MatryoshkaSize {
    return this.size;
  }
  getWeight(): MatryoshkaWeight {
    return this.weight;
  }
}