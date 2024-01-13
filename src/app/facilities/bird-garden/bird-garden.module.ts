import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirdGardenPageRoutingModule } from './bird-garden-routing.module';

import { BirdGardenPage } from './bird-garden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirdGardenPageRoutingModule
  ],
  declarations: [BirdGardenPage]
})
export class BirdGardenPageModule {}
