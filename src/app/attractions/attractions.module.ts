import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttractionsPageRoutingModule } from './attractions-routing.module';

import { AttractionsPage } from './attractions.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttractionsPageRoutingModule,
    ToolbarModule,
    MainfooterCModule

  ],
  declarations: [AttractionsPage]
})
export class AttractionsPageModule {}
