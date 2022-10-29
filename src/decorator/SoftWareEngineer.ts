import { ISoftWareEngineer } from "./interfaces.js";

export class SoftWareEngineer implements ISoftWareEngineer {
  languages = "";
  writeCode(): void {
    console.log("I don't know how to code");
  }
  codeReview(): void {
    console.log("I don't know how to review code");
  }
}
