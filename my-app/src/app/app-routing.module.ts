import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';

import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'items', loadChildren: 'app/items/items.module#ItemsModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules,
        enableTracing: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
