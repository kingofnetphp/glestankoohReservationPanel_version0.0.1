import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QarDastKondPageRoutingModule } from './qar-dast-kond-routing.module';

import { QarDastKondPage } from './qar-dast-kond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QarDastKondPageRoutingModule
  ],
  declarations: [QarDastKondPage]
})
export class QarDastKondPageModule {}
