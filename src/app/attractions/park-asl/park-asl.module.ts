import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkAslPageRoutingModule } from './park-asl-routing.module';

import { ParkAslPage } from './park-asl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkAslPageRoutingModule
  ],
  declarations: [ParkAslPage]
})
export class ParkAslPageModule {}
