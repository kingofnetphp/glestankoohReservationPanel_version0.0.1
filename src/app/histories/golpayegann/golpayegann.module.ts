import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GolpayegannPageRoutingModule } from './golpayegann-routing.module';

import { GolpayegannPage } from './golpayegann.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GolpayegannPageRoutingModule
  ],
  declarations: [GolpayegannPage]
})
export class GolpayegannPageModule {}
