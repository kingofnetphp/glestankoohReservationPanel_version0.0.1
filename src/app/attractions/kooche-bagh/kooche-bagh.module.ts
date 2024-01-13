import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoocheBaghPageRoutingModule } from './kooche-bagh-routing.module';

import { KoocheBaghPage } from './kooche-bagh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoocheBaghPageRoutingModule
  ],
  declarations: [KoocheBaghPage]
})
export class KoocheBaghPageModule {}
