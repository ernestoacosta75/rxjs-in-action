import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineOperatorWAggregateComponent } from './pipeline-operator-waggregate.component';

describe('PipelineOperatorWAggregateComponent', () => {
  let component: PipelineOperatorWAggregateComponent;
  let fixture: ComponentFixture<PipelineOperatorWAggregateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineOperatorWAggregateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineOperatorWAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
