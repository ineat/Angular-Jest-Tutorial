import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { Observable } from 'rxjs';
import { CharactersService } from '../../services';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent implements OnInit {
  heroesTeam = [];
  wickedTeam = [];
  memberPerTeam = 5;
  heroList$: Observable<Hero[]>;
  wickedList$: Observable<Hero[]>;

  constructor(private charService: CharactersService) {}

  ngOnInit() {
    this.heroList$ = this.charService.fetchHeroes();
    this.wickedList$ = this.charService.fetchWicked();
  }

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
