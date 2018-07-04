import {Component, OnInit} from '@angular/core';
import {RolzApiService} from '../shared/service/rolz-api.service';
import {DiceResult} from '../shared/model/dice-result';
import {faDice} from '@fortawesome/free-solid-svg-icons/faDice';

@Component({
  selector: 'app-dicer',
  templateUrl: './dicer.component.html',
  styleUrls: ['./dicer.component.scss']
})
export class DicerComponent implements OnInit {

  rollResult: DiceResult;
  results: DiceResult[];
  rollString: string;
  faDice = faDice;

  constructor(
    private rolz: RolzApiService
  ) {
    this.results = [];
  }

  ngOnInit() {
  }

  roll() {
    const strings = this.rollString.split('+');
    const mod = strings.length === 2 ? +strings[1] : 0;
    const dice = strings[0].split('d');
    console.log(dice);
    this.rolz.roll(+dice[0], +dice[1], mod).subscribe(res => {
      this.rollResult = res;
      this.results.push(this.rollResult);
    });
  }

}
