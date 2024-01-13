import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoqeBabaTorkPage } from './boqe-baba-tork.page';

const routes: Routes = [
  {
    path: '',
    component: BoqeBabaTorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoqeBabaTorkPageRoutingModule {}
