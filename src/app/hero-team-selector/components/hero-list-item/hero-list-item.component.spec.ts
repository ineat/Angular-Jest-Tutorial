import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListItemComponent } from './hero-list-item.component';

describe('HeroListItemComponent', () => {
  let component: HeroListItemComponent;
  let fixture: ComponentFixture<HeroListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
