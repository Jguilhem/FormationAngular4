import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { ItemDirective } from './directives/item/item.directive';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    NavComponent,
    ItemDirective,
  ],
  exports: [
    NavComponent,
    ItemDirective
  ]
})
export class SharedModule { }
