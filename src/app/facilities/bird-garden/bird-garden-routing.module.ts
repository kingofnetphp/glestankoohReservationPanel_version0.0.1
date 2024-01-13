import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdGardenPage } from './bird-garden.page';

const routes: Routes = [
  {
    path: '',
    component: BirdGardenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirdGardenPageRoutingModule {}
