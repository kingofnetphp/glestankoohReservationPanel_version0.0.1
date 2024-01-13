import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadreseBeygomPage } from './madrese-beygom.page';

const routes: Routes = [
  {
    path: '',
    component: MadreseBeygomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadreseBeygomPageRoutingModule {}
