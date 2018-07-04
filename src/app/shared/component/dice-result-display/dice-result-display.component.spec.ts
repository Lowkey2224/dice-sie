import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiceResultDisplayComponent} from './dice-result-display.component';

describe('DiceResultDisplayComponent', () => {
  let component: DiceResultDisplayComponent;
  let fixture: ComponentFixture<DiceResultDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiceResultDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
