import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportGroundsPage } from './sport-grounds.page';

const routes: Routes = [
  {
    path: '',
    component: SportGroundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportGroundsPageRoutingModule {}
