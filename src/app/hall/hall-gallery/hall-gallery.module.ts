import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HallGalleryPageRoutingModule } from './hall-gallery-routing.module';

import { HallGalleryPage } from './hall-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HallGalleryPageRoutingModule
  ],
  declarations: [HallGalleryPage]
})
export class HallGalleryPageModule {}
