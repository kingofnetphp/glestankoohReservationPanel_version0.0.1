import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QarDastKondPage } from './qar-dast-kond.page';

const routes: Routes = [
  {
    path: '',
    component: QarDastKondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QarDastKondPageRoutingModule {}
