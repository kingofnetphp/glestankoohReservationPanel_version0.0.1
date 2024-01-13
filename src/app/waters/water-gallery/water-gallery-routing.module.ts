import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterGalleryPage } from './water-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: WaterGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterGalleryPageRoutingModule {}
