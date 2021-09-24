import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmptyCardComponent } from './empty-card.component';

describe('EmptyCardComponent', () => {
  let component: EmptyCardComponent;
  let fixture: ComponentFixture<EmptyCardComponent>;

  beforeEach(waitForAsync(() => {
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
