import {Component, OnInit} from '@angular/core';
import {RolzApiService} from '../shared/service/rolz-api.service';
import {DiceResult} from '../shared/model/dice-result';

@Component({
  selector: 'app-dicer',
  templateUrl: './dicer.component.html',
  styleUrls: ['./dicer.component.css']
})
export class DicerComponent implements OnInit {

  rollResult: DiceResult;
  results: string[];
  rollString: string;

  constructor(
    private rolz: RolzApiService
  ) {
    this.results = [];
  }

  ngOnInit() {
  }

  roll() {
    const strings = this.rollString.split('+');
    console.log(this.rollString);
    console.log(strings);
    const dice = strings[0].split('d');
    console.log(dice);
    this.rolz.roll(+dice[0], +dice[1], +strings[1]).subscribe(res => {
      this.rollResult = res;
      this.results.push(this.rollResult.details);
    });
  }

}
