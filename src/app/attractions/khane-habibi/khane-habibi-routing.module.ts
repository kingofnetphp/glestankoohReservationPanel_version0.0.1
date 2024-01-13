import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhaneHabibiPage } from './khane-habibi.page';

const routes: Routes = [
  {
    path: '',
    component: KhaneHabibiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhaneHabibiPageRoutingModule {}
