import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicerComponent } from './dicer.component';

describe('DicerComponent', () => {
  let component: DicerComponent;
  let fixture: ComponentFixture<DicerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
