import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasjedJamePage } from './masjed-jame.page';

const routes: Routes = [
  {
    path: '',
    component: MasjedJamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasjedJamePageRoutingModule {}
