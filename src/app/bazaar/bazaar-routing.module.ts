import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BazaarPage } from './bazaar.page';

const routes: Routes = [
  {
    path: '',
    component: BazaarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BazaarPageRoutingModule {}
