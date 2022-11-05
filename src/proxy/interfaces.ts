export interface ICEO {
  makeDeal(deal: string): void;
  donation(): void;
  get isBusy(): boolean;
  set isBusy(bool: boolean);
}
