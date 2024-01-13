import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FereydonnPageRoutingModule } from './fereydonn-routing.module';

import { FereydonnPage } from './fereydonn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FereydonnPageRoutingModule
  ],
  declarations: [FereydonnPage]
})
export class FereydonnPageModule {}
