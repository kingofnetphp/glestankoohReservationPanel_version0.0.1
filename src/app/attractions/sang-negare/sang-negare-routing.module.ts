import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SangNegarePage } from './sang-negare.page';

const routes: Routes = [
  {
    path: '',
    component: SangNegarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SangNegarePageRoutingModule {}
