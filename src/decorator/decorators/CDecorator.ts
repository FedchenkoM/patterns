import { ISoftWareEngineer } from "./../interfaces.js";
import { SoftWareEngineerDecorator } from "./SoftWareEngineerDecorator.js";

export class CDecorator extends SoftWareEngineerDecorator {
  constructor(softWareEngineer: ISoftWareEngineer) {
    super(softWareEngineer);
    this.languages += softWareEngineer.languages + " C";
  }
  writeCode(): void {
    console.log(`I can code in${this.languages}!!!`);
  }
  codeReview(): void {
    console.log(`I can code review by${this.languages}!!!`);
  }
}
