import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpqeBabaPirPageRoutingModule } from './bpqe-baba-pir-routing.module';

import { BpqeBabaPirPage } from './bpqe-baba-pir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpqeBabaPirPageRoutingModule
  ],
  declarations: [BpqeBabaPirPage]
})
export class BpqeBabaPirPageModule {}
