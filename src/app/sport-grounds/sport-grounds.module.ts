import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportGroundsPageRoutingModule } from './sport-grounds-routing.module';

import { SportGroundsPage } from './sport-grounds.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportGroundsPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [SportGroundsPage]
})
export class SportGroundsPageModule {}
