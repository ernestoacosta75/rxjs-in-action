import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsUseCasesComponent } from './rxjs-use-cases.component';

describe('RxjsUseCasesComponent', () => {
  let component: RxjsUseCasesComponent;
  let fixture: ComponentFixture<RxjsUseCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsUseCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsUseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
