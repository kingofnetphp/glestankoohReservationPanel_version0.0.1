import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoocheBaghPage } from './kooche-bagh.page';

const routes: Routes = [
  {
    path: '',
    component: KoocheBaghPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoocheBaghPageRoutingModule {}
