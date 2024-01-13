import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FereydonshahrrPageRoutingModule } from './fereydonshahrr-routing.module';

import { FereydonshahrrPage } from './fereydonshahrr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FereydonshahrrPageRoutingModule
  ],
  declarations: [FereydonshahrrPage]
})
export class FereydonshahrrPageModule {}
