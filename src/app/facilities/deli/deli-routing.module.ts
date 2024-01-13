import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliPage } from './deli.page';

const routes: Routes = [
  {
    path: '',
    component: DeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliPageRoutingModule {}
