import {Component, Input, OnInit} from '@angular/core';
import {DiceResult} from '../../model/dice-result';
import {faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dice-result-display',
  templateUrl: './dice-result-display.component.html',
  styleUrls: ['./dice-result-display.component.scss']
})
export class DiceResultDisplayComponent implements OnInit {

  @Input() result: DiceResult;
  constructor() {
  }

  ngOnInit() {
  }

  diceRolls(): string[] {
    const noOfDice = this.result.input.match(/(\d)+d\d+/)[1];
    console.log(noOfDice);
    return this.result.details.match(/\d/g).slice(0, +noOfDice);
  }

  typeOfDice(): number {
    return +this.result.input.match(/(\d)+d\d+/)[1];
  }

  getIcon(number: string) {
    switch (number) {
      case '1':
        return faDiceOne;
      case '2':
        return faDiceTwo;
      case '3':
        return faDiceThree;
      case '4':
        return faDiceFour;
      case '5':
        return faDiceFive;
      case '6':
        return faDiceSix;
    }
  }


}
