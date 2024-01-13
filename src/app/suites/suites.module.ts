import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitesPageRoutingModule } from './suites-routing.module';

import { SuitesPage } from './suites.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitesPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [SuitesPage]
})
export class SuitesPageModule {}
