import {Injectable} from '@angular/core';
import {from, fromEvent, Observable, of, pipe} from 'rxjs';
import {filter, map, pluck, reduce, scan, tap} from 'rxjs/operators';
import has = Reflect.has;

@Injectable({
  providedIn: 'root'
})
export class CoreOperatorsService {

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

  public mapOperator() {
    const addSixPercent = x => x = (x * .06);

    const percentagesMapped = of(10.0, 20.0, 30.0, 40.0).pipe(map(val => addSixPercent(val)));

    return percentagesMapped;
  }

  public mapFunctionsOverStreams() {
    const csvList = from(['The quick berown fox', 'jumps over the lazy dog'])
      .pipe(
        map(str => str.split(' ')), // Map a set of function to extract the value from the event
        tap(arr => console.log(arr.length))     // The tap operator is very useful for effectful actions such as logging to the screen.
                                                      // This can be very handy for debugging or tracing the values flowing through a stream
      );

    return csvList;
  }

  public listing3_4_FilteringEventsFromAStream() {
    const isNumericalKeyCode = code => code >= 48 && code <= 57;
    const result = fromEvent(document.querySelector('#input'), 'keyup')
      .pipe(
        pluck('keyCode'),       // Extract this property from the object passing through the observable
        filter(isNumericalKeyCode)  // Accept only keys in the numerical range
      );

    return result;
  }

  public screeningProcess(experience: string) {
    const hasJsExperience = bg => bg.toLowerCase().includes(experience.toLowerCase());
    const candidates$ = from(this.candidates).pipe(
      filter(candidate => hasJsExperience(candidate.experience))
    );

    return candidates$;
  }

  /**
   * Using reduce to compute spending
   */
  public listing3_5_UsingReduceToComputeSpending() {
    const add = (x, y) => x + y;

    return from([
      {
        date: '2016-07-01',
        amount: -320.00
      },
      {
        date: '2016-07-13',
        amount: 1000.00
      },
      {
        date: '2016-07-22',
        amount: 45.00
      }
    ]).pipe(
      pluck('amount'),  // Extract the 'amount' property
      tap(value => console.log(value)),
      reduce(add, 0)  // Reduce the set of amount values with an add function
    );
  }

  public getCandidatesWithTechnicalBackground() {
    const backgrounds$ = from(this.candidates).pipe(
      filter(candidate => {                                                   // Filter all candidates that have no knowledge of a programming language
        const bg = candidate.experience.toLowerCase().includes('javascript') || candidate.experience.toLowerCase().includes('c++');
        return bg;
      }),
      reduce((acc, obj:{name: string, experience: string}) => {
        acc.push(obj.name);                                                           // Add candidate name to array
        return acc;
      }, [])                                                                    // Begin with an empty array (called the seed)
    );

    return backgrounds$;
  }

  public getCandidatesWithTechnicalBackgroundUsingScanOperator() {
    const backgrounds$ = from(this.candidates).pipe(
      filter(candidate => {
        const bg = candidate.experience.toLowerCase().includes('javascript') ||
                   candidate.experience.toLowerCase().includes('c++');
        return bg;
      }),
      scan((acc, obj:{name: string, experience: string}) => {   // 1) Scan can be used as a direct replacement of reduce
        acc.push(obj.name);
        return acc;
      }, [])
    );

    return backgrounds$;
  }
}
