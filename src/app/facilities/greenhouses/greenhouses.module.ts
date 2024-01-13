import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreenhousesPageRoutingModule } from './greenhouses-routing.module';

import { GreenhousesPage } from './greenhouses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreenhousesPageRoutingModule
  ],
  declarations: [GreenhousesPage]
})
export class GreenhousesPageModule {}
