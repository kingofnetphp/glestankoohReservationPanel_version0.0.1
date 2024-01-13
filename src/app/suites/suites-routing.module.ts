import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitesPage } from './suites.page';

const routes: Routes = [
  {
    path: '',
    component: SuitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitesPageRoutingModule {}
