import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomerComponent } from './bottomer.component';

describe('BottomerComponent', () => {
  let component: BottomerComponent;
  let fixture: ComponentFixture<BottomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
