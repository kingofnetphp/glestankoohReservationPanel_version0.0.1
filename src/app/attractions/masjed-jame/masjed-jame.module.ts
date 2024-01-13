import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasjedJamePageRoutingModule } from './masjed-jame-routing.module';

import { MasjedJamePage } from './masjed-jame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasjedJamePageRoutingModule
  ],
  declarations: [MasjedJamePage]
})
export class MasjedJamePageModule {}
