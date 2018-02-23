import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent,
    AddItemComponent
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ItemsModule { }
