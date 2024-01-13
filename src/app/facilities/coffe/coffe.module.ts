import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffePageRoutingModule } from './coffe-routing.module';

import { CoffePage } from './coffe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffePageRoutingModule
  ],
  declarations: [CoffePage]
})
export class CoffePageModule {}
