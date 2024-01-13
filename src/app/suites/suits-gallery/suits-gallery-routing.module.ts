import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitsGalleryPage } from './suits-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: SuitsGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitsGalleryPageRoutingModule {}
