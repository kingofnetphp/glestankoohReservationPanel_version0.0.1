import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasjedReesanPage } from './masjed-reesan.page';

const routes: Routes = [
  {
    path: '',
    component: MasjedReesanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasjedReesanPageRoutingModule {}
