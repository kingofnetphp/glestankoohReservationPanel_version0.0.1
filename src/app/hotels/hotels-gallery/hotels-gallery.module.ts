import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelsGalleryPageRoutingModule } from './hotels-gallery-routing.module';

import { HotelsGalleryPage } from './hotels-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelsGalleryPageRoutingModule
  ],
  declarations: [HotelsGalleryPage]
})
export class HotelsGalleryPageModule {}
