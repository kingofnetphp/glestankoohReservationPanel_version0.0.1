import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelsPageRoutingModule } from './hotels-routing.module';

import { HotelsPage } from './hotels.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelsPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [HotelsPage]
})
export class HotelsPageModule {}
