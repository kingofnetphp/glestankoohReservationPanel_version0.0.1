import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImamZadeSeyedPageRoutingModule } from './imam-zade-seyed-routing.module';

import { ImamZadeSeyedPage } from './imam-zade-seyed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImamZadeSeyedPageRoutingModule
  ],
  declarations: [ImamZadeSeyedPage]
})
export class ImamZadeSeyedPageModule {}
