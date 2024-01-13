import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaGolestanKoohPageRoutingModule } from './area-golestan-kooh-routing.module';

import { AreaGolestanKoohPage } from './area-golestan-kooh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaGolestanKoohPageRoutingModule,
    
  ],
  declarations: [AreaGolestanKoohPage]
})

export class AreaGolestanKoohPageModule {}
