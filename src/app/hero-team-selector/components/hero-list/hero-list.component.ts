import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  @Input() list;
  @Input() title: string;

  @Output() selectItem = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onSelect(event) {
    const memberJoinTeam = { type: this.title, member: event };
    this.selectItem.emit(memberJoinTeam);
  }
}
