import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent implements OnInit {
  @Input() item;
  @Output() selectItem = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  select() {
    this.selectItem.emit(this.item);
  }
}
