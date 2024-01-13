import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhaneHabibiPageRoutingModule } from './khane-habibi-routing.module';

import { KhaneHabibiPage } from './khane-habibi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhaneHabibiPageRoutingModule
  ],
  declarations: [KhaneHabibiPage]
})
export class KhaneHabibiPageModule {}
