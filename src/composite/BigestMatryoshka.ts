import { IMatryoshka } from "./interfaces.js";
import { MatryoshkaSize, MatryoshkaWeight } from './enums.js';
import { Matryoshka } from "./Matryoshka.js";

export class BigestMatryoshka extends Matryoshka {
  matryoshkaChildren: IMatryoshka[]
  constructor() {
    super(MatryoshkaWeight.XXL, MatryoshkaSize.XXL)
    this.matryoshkaChildren = [];
  }
  getWeight(): MatryoshkaWeight {
    this.matryoshkaChildren.forEach(m => this.weight += m.getWeight());
    return this.weight;
  }

  getTotalWeight(): number {
    const totalWeight = this.matryoshkaChildren.reduce((p, m) => p + m.getWeight(), 0);
    return this.weight + totalWeight;
  }

  add(m: IMatryoshka): void {
    this.matryoshkaChildren.push(m);
  }
} 