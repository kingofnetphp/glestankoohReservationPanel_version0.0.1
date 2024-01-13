import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KabutarKhanePage } from './kabutar-khane.page';

const routes: Routes = [
  {
    path: '',
    component: KabutarKhanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KabutarKhanePageRoutingModule {}
