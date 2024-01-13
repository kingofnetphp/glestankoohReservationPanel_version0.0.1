import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatersPageRoutingModule } from './waters-routing.module';

import { WatersPage } from './waters.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatersPageRoutingModule,
    ToolbarModule,
    MainfooterCModule
  ],
  declarations: [WatersPage]
})
export class WatersPageModule {}
