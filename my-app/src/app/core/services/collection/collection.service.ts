import { Injectable } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { COLLECTION } from '../collection';

@Injectable()
export class CollectionService {
  private collection: Item[];
  constructor() {
    this.setCollection(COLLECTION);
  }

  getCollection(): Item[] {
    return this.collection;
  }

  setCollection(itemsCollection): void {
    this.collection = itemsCollection;
  }
}
