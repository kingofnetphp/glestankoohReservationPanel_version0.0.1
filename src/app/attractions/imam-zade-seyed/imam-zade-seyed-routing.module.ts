import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImamZadeSeyedPage } from './imam-zade-seyed.page';

const routes: Routes = [
  {
    path: '',
    component: ImamZadeSeyedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImamZadeSeyedPageRoutingModule {}
