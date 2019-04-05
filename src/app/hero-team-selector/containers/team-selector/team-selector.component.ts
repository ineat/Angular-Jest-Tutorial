import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent implements OnInit {
  heroesTeam = [];
  wickedTeam = [];
  memberPerTeam = 5;
  heroList = [
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    },
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    },
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    },
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    }
  ];
  wickedList = [
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    },
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    },
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    },
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
    },
    {
      id: 4,
      name: 'Wolverine',
      real_name: 'James Howlett',
      thumb:
        'https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg',
      description: ''
    }
  ];
  constructor() {}

  ngOnInit() {}

  onSelectMember(member) {
    console.log(member);
    if (member.type === 'Heroes') {
      if (this.heroesTeam.length > 4) {
        window.alert(
          'Your team is full, please remove one hero before add new one'
        );
      } else {
        this.heroesTeam = [...this.heroesTeam, member.member];
      }
    }

    if (member.type === 'Wicked') {
      if (this.wickedTeam.length > 4) {
        window.alert(
          'Your team is full, please remove one hero before add new one'
        );
      } else {
        this.wickedTeam = [...this.wickedTeam, member.member];
      }
    }
  }

  onRemoveMember(member) {
    if (member.type === 'Team of Heros') {
      this.heroesTeam = this.heroesTeam.filter(
        elem => elem.id !== member.member.id
      );
    }

    if (member.type === 'Team of Wicked') {
      this.wickedTeam = this.wickedTeam.filter(
        elem => elem.id !== member.member.id
      );
    }
  }
}
