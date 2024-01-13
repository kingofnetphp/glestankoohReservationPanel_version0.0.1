import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenhousesPage } from './greenhouses.page';

const routes: Routes = [
  {
    path: '',
    component: GreenhousesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreenhousesPageRoutingModule {}
