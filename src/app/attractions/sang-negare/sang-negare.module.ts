import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SangNegarePageRoutingModule } from './sang-negare-routing.module';

import { SangNegarePage } from './sang-negare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SangNegarePageRoutingModule
  ],
  declarations: [SangNegarePage]
})
export class SangNegarePageModule {}
