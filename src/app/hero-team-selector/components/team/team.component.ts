import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {
  @Input() teamMembers: any[];
  @Input() title: string;

  @Output() removeMember = new EventEmitter<any>();

  blankTeam = [{}, {}, {}, {}, {}];
  blankCardNumber = 5;
  heroCardNumber = 0;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.blankTeam = [{}, {}, {}, {}, {}];
    this.heroCardNumber = changes.teamMembers.currentValue.length;
    console.log(this.heroCardNumber);

    this.blankTeam.splice(0, this.heroCardNumber);
    console.log(this.blankTeam);
  }

  onRemoveMember(member) {
    const memberToRemove = { type: this.title, member };
    this.removeMember.emit(memberToRemove);
  }
}
