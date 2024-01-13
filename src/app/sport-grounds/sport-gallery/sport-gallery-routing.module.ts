import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportGalleryPage } from './sport-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: SportGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportGalleryPageRoutingModule {}
