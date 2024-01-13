import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatersPageRoutingModule } from './waters-routing.module';

import { WatersPage } from './waters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatersPageRoutingModule
  ],
  declarations: [WatersPage]
})
export class WatersPageModule {}
