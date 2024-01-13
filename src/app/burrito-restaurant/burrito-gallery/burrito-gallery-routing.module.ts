import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurritoGalleryPage } from './burrito-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: BurritoGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurritoGalleryPageRoutingModule {}
