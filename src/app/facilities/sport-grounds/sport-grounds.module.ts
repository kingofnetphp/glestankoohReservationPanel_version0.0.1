import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportGroundsPageRoutingModule } from './sport-grounds-routing.module';

import { SportGroundsPage } from './sport-grounds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportGroundsPageRoutingModule
  ],
  declarations: [SportGroundsPage]
})
export class SportGroundsPageModule {}
