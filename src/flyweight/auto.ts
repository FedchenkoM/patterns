export type AutoModel = 'BMW' | 'Toyota' | 'Kia';

export class Auto {
  model: AutoModel
  constructor(model: AutoModel) {
    this.model = model
  }
}