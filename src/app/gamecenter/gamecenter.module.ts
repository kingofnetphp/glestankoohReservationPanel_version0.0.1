import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamecenterPageRoutingModule } from './gamecenter-routing.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';
import { gamecenterPage } from './gamecenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamecenterPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [gamecenterPage]
})
export class GamecenterPageModule {}
