import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreenhouseGalleryPageRoutingModule } from './greenhouse-gallery-routing.module';

import { GreenhouseGalleryPage } from './greenhouse-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreenhouseGalleryPageRoutingModule
  ],
  declarations: [GreenhouseGalleryPage]
})
export class GreenhouseGalleryPageModule {}
