import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QabrestanPageRoutingModule } from './qabrestan-routing.module';

import { QabrestanPage } from './qabrestan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QabrestanPageRoutingModule
  ],
  declarations: [QabrestanPage]
})
export class QabrestanPageModule {}
