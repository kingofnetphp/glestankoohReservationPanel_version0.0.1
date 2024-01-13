import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffePageRoutingModule } from './coffe-routing.module';

import { CoffePage } from './coffe.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffePageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [CoffePage]
})
export class CoffePageModule {}
