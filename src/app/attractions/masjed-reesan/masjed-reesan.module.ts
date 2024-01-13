import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasjedReesanPageRoutingModule } from './masjed-reesan-routing.module';

import { MasjedReesanPage } from './masjed-reesan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasjedReesanPageRoutingModule
  ],
  declarations: [MasjedReesanPage]
})
export class MasjedReesanPageModule {}
