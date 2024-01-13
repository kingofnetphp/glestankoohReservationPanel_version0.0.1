import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhaneAbhariPage } from './khane-abhari.page';

const routes: Routes = [
  {
    path: '',
    component: KhaneAbhariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhaneAbhariPageRoutingModule {}
