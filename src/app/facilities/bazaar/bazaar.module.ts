import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BazaarPageRoutingModule } from './bazaar-routing.module';

import { BazaarPage } from './bazaar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BazaarPageRoutingModule
  ],
  declarations: [BazaarPage]
})
export class BazaarPageModule {}
