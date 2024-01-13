import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurritoRestaurantPage } from './burrito-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: BurritoRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurritoRestaurantPageRoutingModule {}
