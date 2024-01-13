import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadreseBeygomPageRoutingModule } from './madrese-beygom-routing.module';

import { MadreseBeygomPage } from './madrese-beygom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadreseBeygomPageRoutingModule
  ],
  declarations: [MadreseBeygomPage]
})
export class MadreseBeygomPageModule {}
