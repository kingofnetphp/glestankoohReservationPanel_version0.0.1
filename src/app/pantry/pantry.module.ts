import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantryPageRoutingModule } from './pantry-routing.module';

import { PantryPage } from './pantry.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantryPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [PantryPage]
})
export class PantryPageModule {}
