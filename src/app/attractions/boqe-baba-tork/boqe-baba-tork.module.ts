import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoqeBabaTorkPageRoutingModule } from './boqe-baba-tork-routing.module';

import { BoqeBabaTorkPage } from './boqe-baba-tork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoqeBabaTorkPageRoutingModule
  ],
  declarations: [BoqeBabaTorkPage]
})
export class BoqeBabaTorkPageModule {}
