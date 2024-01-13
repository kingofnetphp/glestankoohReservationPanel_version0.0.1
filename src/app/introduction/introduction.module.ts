import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IntroductionPageRoutingModule } from './introduction-routing.module';

import { IntroductionPage } from './introduction.page';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPageRoutingModule,
    MainfooterCModule,
    ToolbarModule,
     
  ],

  declarations: [IntroductionPage]
})
export class IntroductionPageModule {




}
