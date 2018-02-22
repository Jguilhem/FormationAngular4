import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state: any;
  constructor() { }

  ngOnInit() {
    this.state = State;
  }

  changeState(state: State): void {
    this.item.state = state;
  }
}
