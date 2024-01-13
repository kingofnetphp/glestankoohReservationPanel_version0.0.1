import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkMeliPage } from './park-meli.page';

const routes: Routes = [
  {
    path: '',
    component: ParkMeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkMeliPageRoutingModule {}
