import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiceResult} from '../model/dice-result';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolzApiService {

  constructor(private http: HttpClient) {
  }

  public roll(noDice: number, typeOfDice: number, modificator?: number): Observable<DiceResult> {
    const param = modificator ? `${noDice}d${typeOfDice}+${modificator}` : `${noDice}d${typeOfDice}`;
    return this.http.get<DiceResult>(`https://rolz.org/api/?${param}.json`);
  }
}
