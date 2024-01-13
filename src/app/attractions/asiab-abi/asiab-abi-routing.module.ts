import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiabAbiPage } from './asiab-abi.page';

const routes: Routes = [
  {
    path: '',
    component: AsiabAbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsiabAbiPageRoutingModule {}
