import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCardComponent } from './empty-card.component';

describe('EmptyCardComponent', () => {
  let component: EmptyCardComponent;
  let fixture: ComponentFixture<EmptyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
