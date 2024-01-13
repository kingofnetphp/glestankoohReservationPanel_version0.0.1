import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliPageRoutingModule } from './deli-routing.module';

import { DeliPage } from './deli.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliPageRoutingModule,
    MainfooterCModule,
    ToolbarModule
  ],
  declarations: [DeliPage]
})
export class DeliPageModule {}
