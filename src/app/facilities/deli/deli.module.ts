import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliPageRoutingModule } from './deli-routing.module';

import { DeliPage } from './deli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliPageRoutingModule
  ],
  declarations: [DeliPage]
})
export class DeliPageModule {}
