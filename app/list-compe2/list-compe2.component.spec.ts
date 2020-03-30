import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompe2Component } from './list-compe2.component';

describe('ListCompe2Component', () => {
  let component: ListCompe2Component;
  let fixture: ComponentFixture<ListCompe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
