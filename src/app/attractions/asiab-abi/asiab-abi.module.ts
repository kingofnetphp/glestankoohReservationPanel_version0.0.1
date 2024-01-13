import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsiabAbiPageRoutingModule } from './asiab-abi-routing.module';

import { AsiabAbiPage } from './asiab-abi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsiabAbiPageRoutingModule
  ],
  declarations: [AsiabAbiPage]
})
export class AsiabAbiPageModule {}
