import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxjsUseCasesComponent } from './components/rxjs-use-cases/rxjs-use-cases.component';
import { CoreOperatorsComponent } from './components/core-operators/core-operators/core-operators.component';
import { PipelineOperatorWAggregateComponent } from './components/pipeline-operators/pipeline-operator-waggregate/pipeline-operator-waggregate.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsUseCasesComponent,
    CoreOperatorsComponent,
    PipelineOperatorWAggregateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
