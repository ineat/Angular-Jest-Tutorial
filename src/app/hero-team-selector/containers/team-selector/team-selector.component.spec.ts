import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { TeamSelectorComponent } from "./team-selector.component";
import {
  HeroListComponent,
  HeroListItemComponent,
  TeamComponent,
  HeroCardComponent,
  EmptyCardComponent
} from "../../components";
import { CharactersService } from "../../services";

describe("TeamSelectorComponent", () => {
  let component: TeamSelectorComponent;
  let fixture: ComponentFixture<TeamSelectorComponent>;

  const hero = {
    type: "Heroes",
    member: {
      id: 2,
      name: "Hulk",
      real_name: "Robert Bruce Banner",
      thumb:
        "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
      description:
        "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
    }
  };

  const wicked = {
    type: "Wicked",
    member: {
      id: 2,
      name: "Hulk",
      real_name: "Robert Bruce Banner",
      thumb:
        "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
      description:
        "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
    }
  };

  const heroToRemove = {
    type: "Team of Heros",
    member: {
      id: 2,
      name: "Hulk",
      real_name: "Robert Bruce Banner",
      thumb:
        "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
      description:
        "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
    }
  };

  const wickedToRemove = {
    type: "Team of Wicked",
    member: {
      id: 2,
      name: "Hulk",
      real_name: "Robert Bruce Banner",
      thumb:
        "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
      description:
        "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        TeamSelectorComponent,
        HeroListComponent,
        HeroListItemComponent,
        TeamComponent,
        HeroCardComponent,
        EmptyCardComponent
      ],
      providers: [CharactersService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectorComponent);
    component = fixture.componentInstance;
    jest.spyOn(window, "alert").mockReturnValue();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should add Hero in heroesTeam when onSelectMember is called with Hero", () => {
    component.wickedTeam = [];
    component.heroesTeam = [];
    component.onSelectMember(hero);
    expect(component.heroesTeam.length).toEqual(1);
  });

  it("should called window.alert when you try to add hero with full heroesTeam", () => {
    component.wickedTeam = [];
    component.heroesTeam = [{}, {}, {}, {}, {}];
    component.onSelectMember(hero);
    expect(component.heroesTeam.length).toEqual(5);
    expect(window.alert).toHaveBeenCalled();
  });

  it("should add Hero in wickedTeam when onSelectMember is called with Wicked", () => {
    component.wickedTeam = [];
    component.heroesTeam = [];
    component.onSelectMember(wicked);
    expect(component.wickedTeam.length).toEqual(1);
  });

  it("should called window.alert when you try to add hero with full wickedTeam", () => {
    component.wickedTeam = [{}, {}, {}, {}, {}];
    component.heroesTeam = [];
    component.onSelectMember(wicked);
    expect(component.wickedTeam.length).toEqual(5);
    expect(window.alert).toHaveBeenCalled();
  });

  it("should remove hero from heroesTeam when onRemoveMember was called with an hero", () => {
    component.wickedTeam = [];
    component.heroesTeam = [
      {
        id: 2,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description:
          "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
      },
      {
        id: 1,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description:
          "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
      },
      {
        id: 3,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description:
          "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
      }
    ];

    component.onRemoveMember(heroToRemove);
    expect(component.heroesTeam.length).toEqual(2);
  });

  it("should remove wicked from wickedTeam when onRemoveMember was called with an wicked", () => {
    component.wickedTeam = [
      {
        id: 2,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description:
          "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
      },
      {
        id: 1,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description:
          "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
      },
      {
        id: 3,
        name: "Hulk",
        real_name: "Robert Bruce Banner",
        thumb:
          "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg",
        description:
          "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
      }
    ];
    component.heroesTeam = [];

    component.onRemoveMember(wickedToRemove);
    expect(component.wickedTeam.length).toEqual(2);
  });
});
