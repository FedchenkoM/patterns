export class Company {
  private static instance: Company | null;
  static deal: string[] = [];
  private constructor() {
  }

  static get deals(): string[] {
    return this.deal;
  }

  public static getCompany(): Company {
    if (!Company.instance) {
      Company.instance = new Company();
    }
    return Company.instance;
  }

  static addDeal(deal: string): void {
    Company.deal.push(deal);
  }

  public makeDonation(): void {
  }
}