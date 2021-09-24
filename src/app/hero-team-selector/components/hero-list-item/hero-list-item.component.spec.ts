import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroListItemComponent } from './hero-list-item.component';

describe('HeroListItemComponent', () => {
  let component: HeroListItemComponent;
  let fixture: ComponentFixture<HeroListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListItemComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.selectItem, 'emit');
    component.item = {
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

  it('should emit SelectItem event when method select was called', () => {
    component.select();
    expect(component.selectItem.emit).toHaveBeenCalledWith(component.item);
  });
});
