import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreenhousesPageRoutingModule } from './greenhouses-routing.module';

import { GreenhousesPage } from './greenhouses.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreenhousesPageRoutingModule,
    ToolbarModule,
    MainfooterCModule
  ],
  declarations: [GreenhousesPage]
})
export class GreenhousesPageModule {}
