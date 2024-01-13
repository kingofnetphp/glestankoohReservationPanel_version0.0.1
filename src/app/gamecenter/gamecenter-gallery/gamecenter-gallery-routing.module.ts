import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamecenterGalleryPage } from './gamecenter-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GamecenterGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamecenterGalleryPageRoutingModule {}
