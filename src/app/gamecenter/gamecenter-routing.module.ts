import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { gamecenterPage } from './gamecenter.page';

const routes: Routes = [
  {
    path: '',
    component: gamecenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamecenterPageRoutingModule {}
