import { Injectable } from '@angular/core';
import {Observable, of, from, fromEvent} from 'rxjs';
import { fromPromise} from 'rxjs/internal-compatibility';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsUseCasesService {

  constructor() { }

  /**
   * Single-value synchronous.
   *
   * This is the category of any function that returns a single object.
   */
  public singleValueSynchronous() {
    console.log('A single piece of data');
    return of(42);
  }

  /**
   * Multi-value synchronous.
   *
   * This is the category of collections of data, mainly from arrays.
   */
  public multiValueSynchronous() {
    console.log('A collection of data');
    const map = new Map();

    map.set('key1', 'value1');
    map.set('key2', 'value2');

    return from(map);
  }

  /**
   * Single-value asynchronous.
   * This dimensions addresses wheter a task will execute synchronously or asynchornously.
   */
  public singleValueAsynchronous() {
    console.log('Single-value asynchronous data');

    const increment = 1;
    const fortyTwo = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(42);
      }, 5000);
    });

    return fromPromise(fortyTwo);
  }

  public bareObservable() {
    const source$ = new Observable(observer => {
      observer.next('4111111111111111111111');
      observer.next('5105105105105105105100');
      observer.next('4342561111111111111118');
      observer.next('6500000000000000000002');
      observer.complete();  // If an Observable is finite, you can signal its completion by calling the Observer's complete() method.
    });                     // At this point, the observable stands idle and none of the data is acttually emitted or passed into the observer

    return source$;
  }

  public getObservableFromPromise() {
    const computeFutureValue = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(42);            // Resolve the promise after 5 seconds have elapsed
      }, 5000);
    });

    return fromPromise(computeFutureValue);
  }
}
