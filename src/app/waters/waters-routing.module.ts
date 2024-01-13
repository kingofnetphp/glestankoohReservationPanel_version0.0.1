import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatersPage } from './waters.page';

const routes: Routes = [
  {
    path: '',
    component: WatersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatersPageRoutingModule {}
