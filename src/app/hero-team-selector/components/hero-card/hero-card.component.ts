import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() member;
  @Output() removeMember = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  remove() {
    this.removeMember.emit(this.member);
  }
}
