import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraditionalRestaurantPageRoutingModule } from './traditional-restaurant-routing.module';

import { TraditionalRestaurantPage } from './traditional-restaurant.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraditionalRestaurantPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [TraditionalRestaurantPage]
})
export class TraditionalRestaurantPageModule {}
