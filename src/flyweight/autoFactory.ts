import { Auto, AutoModel } from './auto.js';

type AutoModels = {
  [K in AutoModel]?: Auto;
}

export class AutoFactory {
  models: AutoModels;
  constructor() {
    this.models = {};
  }

  create(m: AutoModel): Auto | unknown {
    if (!this.models[m]) {
      this.models[m] = new Auto(m);
    }
    return this.models[m]
  }

  getModels(): AutoModels {
    return this.models;
  }
}