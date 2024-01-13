import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraditionalRestaurantPageRoutingModule } from './traditional-restaurant-routing.module';

import { TraditionalRestaurantPage } from './traditional-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraditionalRestaurantPageRoutingModule
  ],
  declarations: [TraditionalRestaurantPage]
})
export class TraditionalRestaurantPageModule {}
