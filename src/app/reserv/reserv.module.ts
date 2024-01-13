import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LibWizardPanelModule } from 'lib-wizard-panel';
import { ReservRoutingModule } from './reserv-routing.module';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { Reserv } from './reserv';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MainfooterCModule } from '../mainfooter/mainfooter.module';
@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    ReservRoutingModule,
    MainfooterCModule,
    ToolbarModule,
    LibWizardPanelModule,//NoopAnimationsModule
     
  ],

  declarations: [Reserv]
})
export class ReservModule {




}
