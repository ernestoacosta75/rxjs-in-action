import { Component, OnInit } from '@angular/core';
import {CoreOperatorsService} from '../../../services/core-operators/core-operators.service';

@Component({
  selector: 'app-core-operators',
  templateUrl: './core-operators.component.html',
  styleUrls: ['./core-operators.component.css']
})
export class CoreOperatorsComponent implements OnInit {

  constructor(private  service: CoreOperatorsService) { }

  ngOnInit() {
    // const mapOperatorObservable = this.service.mapOperator().subscribe(console.log);
    // const mapFunctionsOverStreamsObservable = this.service.mapFunctionsOverStreams().subscribe(console.log);
    // const filteringEventsFromAStreamObservable = this.service.listing3_4_FilteringEventsFromAStream()
    //  .subscribe(code => console.log(`User typed: ${String.fromCharCode(code)}`));

    // const javaScriptCandidatesObservable = this.service.screeningProcess('javascript').subscribe(console.log);
    // const usingReduceToComputeSpendingObservable = this.service.listing3_5_UsingReduceToComputeSpending().subscribe(console.log);
    // const getCandidatesWithTechnicalBackgroundObservable = this.service.getCandidatesWithTechnicalBackground().subscribe(console.log);

    // tslint:disable-next-line:max-line-length
    const getCandidatesWithTBackgUsingScanOperator = this.service
                                                      .getCandidatesWithTechnicalBackgroundUsingScanOperator()
                                                      .subscribe(console.log);
  }

}
