import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FereydonnPage } from './fereydonn.page';

const routes: Routes = [
  {
    path: '',
    component: FereydonnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FereydonnPageRoutingModule {}
