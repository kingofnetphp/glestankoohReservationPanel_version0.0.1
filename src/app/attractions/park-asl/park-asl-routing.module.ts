import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkAslPage } from './park-asl.page';

const routes: Routes = [
  {
    path: '',
    component: ParkAslPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkAslPageRoutingModule {}
