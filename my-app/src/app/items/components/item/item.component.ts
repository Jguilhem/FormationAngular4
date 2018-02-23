import { Component, OnInit, Input } from '@angular/core';

import { CollectionService } from '../../../core/services/collection/collection.service';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state: any;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.state = State;
  }

  changeState(state: State): void {
    this.item.state = state;
    this.collectionService.update(this.item);
  }
}
