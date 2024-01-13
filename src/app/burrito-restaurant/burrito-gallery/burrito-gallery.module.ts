import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurritoGalleryPageRoutingModule } from './burrito-gallery-routing.module';

import { BurritoGalleryPage } from './burrito-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurritoGalleryPageRoutingModule
  ],
  declarations: [BurritoGalleryPage]
})
export class BurritoGalleryPageModule {}
