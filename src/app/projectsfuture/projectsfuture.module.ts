import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsfutureComponentRoutingModule } from './Projectsfuture-routing.module';

import { ProjectsfutureComponent } from './projectsfuture.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsfutureComponentRoutingModule,
    ToolbarModule,
    MainfooterCModule
  ],
  declarations: [ProjectsfutureComponent]
})
export class ProjectsfutureComponentModule {}
