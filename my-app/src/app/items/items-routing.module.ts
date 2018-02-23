import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { FormComponent } from '../shared/components/form/form.component';

const appRoutes: Routes = [
  { path: 'liste', component: ListItemsComponent },
  { path: 'add', component: FormComponent }
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
