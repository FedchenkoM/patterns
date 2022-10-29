import { ISoftWareEngineer } from "./../interfaces.js";

export class SoftWareEngineerDecorator implements ISoftWareEngineer {
  protected SWE: ISoftWareEngineer;
  languages: string;
  constructor(softWareEngineer: ISoftWareEngineer) {
    this.SWE = softWareEngineer;
    this.languages = "";
  }
  writeCode(): void {
    return this.SWE.writeCode();
  }
  codeReview(): void {
    return this.SWE.codeReview();
  }
}
