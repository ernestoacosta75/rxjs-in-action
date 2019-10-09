import { Component, OnInit } from '@angular/core';
import {OperatorPipelinesWAggregatesService} from '../../../services/sequencingoperatorpipelines-withaggregates/operator-pipelines-waggregates.service';

@Component({
  selector: 'app-pipeline-operator-waggregate',
  templateUrl: './pipeline-operator-waggregate.component.html',
  styleUrls: ['./pipeline-operator-waggregate.component.css']
})
export class PipelineOperatorWAggregateComponent implements OnInit {

  constructor(private service: OperatorPipelinesWAggregatesService) { }

  ngOnInit() {
    const operatorsPipeline$ = this.service.chainOperators([1, 2, 3]).subscribe(console.log);

    const aggregateOperators = this.service.listing3_7_UsingAggregateOperators().subscribe();
  }

}
