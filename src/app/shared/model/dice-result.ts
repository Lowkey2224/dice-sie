export class DiceResult {
  result: number;
  details: string;
  input: string;
  illustration: string;
  timestamp: number;
  modificator?: number;

  public static getNumberOfDice(result: DiceResult): number {
    return +result.input.match(/(\d+)d\d+/)[1];
  }

  public static getTypeOfDice(result: DiceResult): number {
    return +result.input.match(/\d+d(\d)+/)[1];
  }

  public static getTarget(result: DiceResult): number {
    const match = result.input.match(/\d+d\d+[erfERF](\d+)/);
    if (match && match.length === 2) {
      return +match[1];
    } else {
      return 0;
    }
  }
}
