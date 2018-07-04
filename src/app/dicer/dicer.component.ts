import {Component, OnInit} from '@angular/core';
import {RolzApiService} from '../shared/service/rolz-api.service';
import {DiceResult} from '../shared/model/dice-result';
import {faDice} from '@fortawesome/free-solid-svg-icons/faDice';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dicer',
  templateUrl: './dicer.component.html',
  styleUrls: ['./dicer.component.scss']
})
export class DicerComponent implements OnInit {

  rollResult: DiceResult;
  results: DiceResult[];
  faDice = faDice;
  rollForm: FormGroup;

  constructor(
    private rolz: RolzApiService,
    private fb: FormBuilder
  ) {
    const rollPattern = /^\d+d\d+(([ERFerf]\d+)|(\+\d+))?$/;
    this.results = [];
    this.rollForm = fb.group({
      roll: new FormControl('', [Validators.required, Validators.pattern(rollPattern)]),
    });
  }

  ngOnInit() {
  }

  roll() {

    const strings = this.rollForm.get('roll').value.split('+');
    const mod = strings.length === 2 ? +strings[1] : 0;
    this.rolz.roll(strings[0], mod).subscribe(res => {
      this.rollResult = res;
      this.results.push(this.rollResult);
    });
  }

}
