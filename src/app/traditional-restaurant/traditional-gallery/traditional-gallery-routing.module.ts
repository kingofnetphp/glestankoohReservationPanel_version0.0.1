import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraditionalGalleryPage } from './traditional-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: TraditionalGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraditionalGalleryPageRoutingModule {}
