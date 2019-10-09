import { Component, OnInit } from '@angular/core';
import { RxjsUseCasesService} from '../../services/rxjs-use-cases.service';

@Component({
  selector: 'app-rxjs-use-cases',
  templateUrl: './rxjs-use-cases.component.html',
  styleUrls: ['./rxjs-use-cases.component.css']
})
export class RxjsUseCasesComponent implements OnInit {

  constructor( private service: RxjsUseCasesService ) { }

  ngOnInit() {
    const singleValueSynchronousObservable =  this.service.singleValueSynchronous();
    singleValueSynchronousObservable.subscribe(console.log);

    const multiValueSynchronousObservlable = this.service.multiValueSynchronous();
    multiValueSynchronousObservlable.subscribe((valueData: [any, any]) => {
      console.log(valueData);
    });

    const singleValueAsynchronousObservable = this.service.singleValueAsynchronous();
    singleValueAsynchronousObservable.subscribe(console.log);

    const bareObservable = this.service.bareObservable().subscribe(console.log);

    const observableFromPromise = this.service.getObservableFromPromise()
      .subscribe(
        function next(val) {
          console.log(val);
        },
        function error(err) {
          console.log(`Error occurred: ${err}`);
        },
        function complete() {
          console.log('All done!')
        }
      );
  }

}
