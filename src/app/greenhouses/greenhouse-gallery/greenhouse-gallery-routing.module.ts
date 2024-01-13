import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenhouseGalleryPage } from './greenhouse-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GreenhouseGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreenhouseGalleryPageRoutingModule {}
