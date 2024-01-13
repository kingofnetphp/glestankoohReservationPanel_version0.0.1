import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HallPageRoutingModule } from './hall-routing.module';

import { HallPage } from './hall.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HallPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [HallPage]
})
export class HallPageModule {}
