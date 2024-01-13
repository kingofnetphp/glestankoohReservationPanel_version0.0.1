import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reserv } from './reserv';

const routes: Routes = [
  {
    path: '',
    component: Reserv
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservRoutingModule {}
