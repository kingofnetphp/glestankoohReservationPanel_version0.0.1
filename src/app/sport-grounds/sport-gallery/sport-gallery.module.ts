import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportGalleryPageRoutingModule } from './sport-gallery-routing.module';

import { SportGalleryPage } from './sport-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportGalleryPageRoutingModule
  ],
  declarations: [SportGalleryPage]
})
export class SportGalleryPageModule {}
