import { Injectable } from '@angular/core';
import { from, Observable, Observer } from 'rxjs';
import {filter, map, pluck, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperatorPipelinesWAggregatesService {

  candidates: Array<{name: string, experience: string}>;

  constructor() {
    this.candidates = [
      {name: 'Brendan Eich', experience: 'Javascript Inventor'},
      {name: 'Emmet Brown', experience: 'Historian'},
      {name: 'George Lucas', experience: 'Sci-fi writer'},
      {name: 'Alberto Perez', experience: 'Zumba Instructor'},
      {name: 'Bjarne Stroustrup', experience: 'C++ Developer'}
    ];
  }

  public chainOperators(original: number []) {

    return from(original).pipe(
      filter((x) => {
        console.log(`filtering ${x}`);
        return x % 2 !== 0;
      }),
      map((x: number) => {
        console.log(`mapping ${x}`);
        return x * x;
      })
    );
  }

  /**
   * Using aggregate operators.
   */
  public listing3_7_UsingAggregateOperators() {
    return from(this.candidates).pipe(
      pluck('experience'),
      take(2),                                    // 1) Take only the first two elements (Another filtering operator)
      tap(val => console.log(`Visiting ${val}`))  // 2) Perform the logging routine and pass alone the observable sequence
    );
  }
}
