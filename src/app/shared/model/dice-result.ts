export class DiceResult {
  result: number;
  details: string;
  input: string;
  illustration: string;
  timestamp: number;
  modificator?: number;

  public getNumberOfDice(): number {
    return +this.input.match(/(\d+)+d\d+/)[1];
  }

  public getTypeOfDice(): number {
    return +this.input.match(/(\d+)+d\d+/)[1];
  }

  public getTarget(): number {
    const match = this.input.match(/(\d+)+d\d+[erfERF](\d+)/);
    if (match.length === 2) {
      return +match[1];
    } else {
      return 0;
    }
  }
}
