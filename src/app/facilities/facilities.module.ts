import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacilitiesPageRoutingModule } from './facilities-routing.module';

import { FacilitiesPage } from './facilities.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacilitiesPageRoutingModule,
    ToolbarModule,
    MainfooterCModule
  ],
  declarations: [FacilitiesPage]
})
export class FacilitiesPageModule {}
