export class Sun {
  private constructor() {
  }
  private static numberOfExplosions: number = 0;
  private static instance: Sun | null;

  public static getSun(): Sun {
    if (!Sun.instance) {
      Sun.instance = new Sun();
    }
    return Sun.instance;
  }

  public static explosion(): string {
    Sun.numberOfExplosions++
    return 'Boom!!!'
  }

  public static getNumbersOfExplosion(): number {
    return Sun.numberOfExplosions;
  }
}
