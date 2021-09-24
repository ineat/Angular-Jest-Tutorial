import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import { HeroListItemComponent } from '../hero-list-item/hero-list-item.component';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListComponent, HeroListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.selectItem, 'emit');
    component.title = 'hero';
    component.list = [
      {
        id: 2,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      },
      {
        id: 3,
        name: 'IronMan',
        real_name: 'Anthony Edward "Tony" Stark',
        thumb:
          'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg',
        description: ''
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectItem event when onSelect function is call', () => {
    component.onSelect(component.list[0]);
    expect(component.selectItem.emit).toHaveBeenCalledWith({
      type: component.title,
      member: component.list[0]
    });
  });
});
