import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.removeMember, 'emit');
    component.member = {
      id: 3,
      name: 'IronMan',
      real_name: 'Anthony Edward "Tony" Stark',
      thumb:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg',
      description: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit removeHero event when call remove function', () => {
    component.remove();
    expect(component.removeMember.emit).toHaveBeenCalledWith(component.member);
  });
});
