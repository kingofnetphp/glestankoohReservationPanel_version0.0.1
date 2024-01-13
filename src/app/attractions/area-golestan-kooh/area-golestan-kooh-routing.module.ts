import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaGolestanKoohPage } from './area-golestan-kooh.page';

const routes: Routes = [
  {
    path: '',
    component: AreaGolestanKoohPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaGolestanKoohPageRoutingModule {}
