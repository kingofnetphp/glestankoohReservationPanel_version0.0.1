import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliGalleryPage } from './deli-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: DeliGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliGalleryPageRoutingModule {}
