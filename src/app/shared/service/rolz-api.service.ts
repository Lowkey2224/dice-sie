import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiceResult} from '../model/dice-result';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolzApiService {

  constructor(private http: HttpClient) {
  }

  public roll(noDice: number, typeOfDice: number, modificator?: number): Observable<DiceResult> {
    const param = `${noDice}d${typeOfDice}`;
    return this.http.get<DiceResult>(`https://rolz.org/api/?${param}.json`).pipe(
      map((result: DiceResult) => {
        result.modificator = modificator;
        return result;
      })
    );
  }
}
