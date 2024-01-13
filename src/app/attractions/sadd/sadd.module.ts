import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaddPageRoutingModule } from './sadd-routing.module';

import { SaddPage } from './sadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaddPageRoutingModule
  ],
  declarations: [SaddPage]
})
export class SaddPageModule {}
