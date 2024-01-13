import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoohSeilPage } from './kooh-seil.page';

const routes: Routes = [
  {
    path: '',
    component: KoohSeilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoohSeilPageRoutingModule {}
