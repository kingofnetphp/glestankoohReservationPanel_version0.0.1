import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraditionalRestaurantPage } from './traditional-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: TraditionalRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraditionalRestaurantPageRoutingModule {}
