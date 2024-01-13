import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImamZadeAliNaghiPage } from './imam-zade-ali-naghi.page';

const routes: Routes = [
  {
    path: '',
    component: ImamZadeAliNaghiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImamZadeAliNaghiPageRoutingModule {}
