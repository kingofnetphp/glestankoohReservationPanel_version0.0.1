import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BazaarPageRoutingModule } from './bazaar-routing.module';


import { BazaarPage } from './bazaar.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BazaarPageRoutingModule,
    ToolbarModule,
    MainfooterCModule
    
  ],
  declarations: [BazaarPage]
})
export class BazaarPageModule {}
