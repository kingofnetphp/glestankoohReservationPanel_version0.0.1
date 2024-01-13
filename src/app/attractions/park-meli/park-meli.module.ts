import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkMeliPageRoutingModule } from './park-meli-routing.module';

import { ParkMeliPage } from './park-meli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkMeliPageRoutingModule
  ],
  declarations: [ParkMeliPage]
})
export class ParkMeliPageModule {}
