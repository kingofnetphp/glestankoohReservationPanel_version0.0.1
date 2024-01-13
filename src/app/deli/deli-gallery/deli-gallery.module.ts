import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliGalleryPageRoutingModule } from './deli-gallery-routing.module';

import { DeliGalleryPage } from './deli-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliGalleryPageRoutingModule
  ],
  declarations: [DeliGalleryPage]
})
export class DeliGalleryPageModule {}
