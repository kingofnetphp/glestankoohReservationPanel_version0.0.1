import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterGalleryPageRoutingModule } from './water-gallery-routing.module';

import { WaterGalleryPage } from './water-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterGalleryPageRoutingModule
  ],
  declarations: [WaterGalleryPage]
})
export class WaterGalleryPageModule {}
