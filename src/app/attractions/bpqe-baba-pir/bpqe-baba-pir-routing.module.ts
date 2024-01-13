import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpqeBabaPirPage } from './bpqe-baba-pir.page';

const routes: Routes = [
  {
    path: '',
    component: BpqeBabaPirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpqeBabaPirPageRoutingModule {}
