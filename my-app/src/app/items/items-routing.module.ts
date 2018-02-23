import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddItemComponent } from './containers/add-item/add-item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';

const appRoutes: Routes = [
  { path: 'liste', component: ListItemsComponent },
  { path: 'add', component: AddItemComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
})
export class ItemsRoutingModule { }
