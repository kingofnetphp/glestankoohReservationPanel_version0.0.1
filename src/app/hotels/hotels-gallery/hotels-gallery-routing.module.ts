import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsGalleryPage } from './hotels-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsGalleryPageRoutingModule {}
