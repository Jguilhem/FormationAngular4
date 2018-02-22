import { Item } from '../../shared/interfaces/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Christophe',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Julien',
    reference: '2413',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Charlotte',
    reference: '2537',
    state: State.LIVREE
  }
];
