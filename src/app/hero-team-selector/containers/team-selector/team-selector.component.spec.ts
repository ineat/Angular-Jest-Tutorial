import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSelectorComponent } from './team-selector.component';

describe('TeamSelectorComponent', () => {
  let component: TeamSelectorComponent;
  let fixture: ComponentFixture<TeamSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
