import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreOperatorsComponent } from './core-operators.component';

describe('CoreOperatorsComponent', () => {
  let component: CoreOperatorsComponent;
  let fixture: ComponentFixture<CoreOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
