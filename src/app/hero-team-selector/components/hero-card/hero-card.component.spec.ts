import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
