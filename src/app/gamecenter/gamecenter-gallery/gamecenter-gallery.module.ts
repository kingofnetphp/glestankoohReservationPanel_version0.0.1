import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamecenterGalleryPageRoutingModule } from './gamecenter-gallery-routing.module';

import { GamecenterGalleryPage } from './gamecenter-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamecenterGalleryPageRoutingModule
  ],
  declarations: [GamecenterGalleryPage]
})
export class GamecenterGalleryPageModule {}
