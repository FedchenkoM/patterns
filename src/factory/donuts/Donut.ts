export class Donut {
  callories: number;
  filling: string;
  weight: number;
  constructor(c: number, f: string, w: number) {
    console.log(`I am donut with ${f}`);
    this.callories = c;
    this.filling = f;
    this.weight = w;
  }
}
