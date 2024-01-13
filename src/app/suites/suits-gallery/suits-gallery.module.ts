import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitsGalleryPageRoutingModule } from './suits-gallery-routing.module';

import { SuitsGalleryPage } from './suits-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitsGalleryPageRoutingModule
  ],
  declarations: [SuitsGalleryPage]
})
export class SuitsGalleryPageModule {}
