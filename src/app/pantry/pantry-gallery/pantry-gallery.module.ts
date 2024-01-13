import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantryGalleryPageRoutingModule } from './pantry-gallery-routing.module';

import { PantryGalleryPage } from './pantry-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantryGalleryPageRoutingModule
  ],
  declarations: [PantryGalleryPage]
})
export class PantryGalleryPageModule {}
