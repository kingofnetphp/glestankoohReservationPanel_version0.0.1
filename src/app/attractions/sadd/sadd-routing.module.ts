import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaddPage } from './sadd.page';

const routes: Routes = [
  {
    path: '',
    component: SaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaddPageRoutingModule {}
