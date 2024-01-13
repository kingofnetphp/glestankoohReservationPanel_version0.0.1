import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoohSeilPageRoutingModule } from './kooh-seil-routing.module';

import { KoohSeilPage } from './kooh-seil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoohSeilPageRoutingModule
  ],
  declarations: [KoohSeilPage]
})
export class KoohSeilPageModule {}
