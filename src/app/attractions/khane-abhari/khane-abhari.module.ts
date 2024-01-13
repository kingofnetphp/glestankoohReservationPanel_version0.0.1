import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhaneAbhariPageRoutingModule } from './khane-abhari-routing.module';

import { KhaneAbhariPage } from './khane-abhari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhaneAbhariPageRoutingModule
  ],
  declarations: [KhaneAbhariPage]
})
export class KhaneAbhariPageModule {}
