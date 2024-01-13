import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImamZadeAliNaghiPageRoutingModule } from './imam-zade-ali-naghi-routing.module';

import { ImamZadeAliNaghiPage } from './imam-zade-ali-naghi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImamZadeAliNaghiPageRoutingModule
  ],
  declarations: [ImamZadeAliNaghiPage]
})
export class ImamZadeAliNaghiPageModule {}
