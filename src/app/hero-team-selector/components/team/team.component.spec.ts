import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { EmptyCardComponent } from '../empty-card/empty-card.component';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent, HeroCardComponent, EmptyCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    (component.title = 'Team Hero'), jest.spyOn(component.removeMember, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event removeMember with formatted object memberToRemove', () => {
    const member = {
      id: 3,
      name: 'IronMan',
      real_name: 'Anthony Edward "Tony" Stark',
      thumb:
        'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg',
      description: ''
    };

    component.onRemoveMember(member);
    expect(component.removeMember.emit).toHaveBeenLastCalledWith({
      type: component.title,
      member
    });
  });
});
