import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantryGalleryPage } from './pantry-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: PantryGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantryGalleryPageRoutingModule {}
