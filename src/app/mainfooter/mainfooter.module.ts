import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainfooterComponent } from './Mainfooter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [MainfooterComponent],
  exports:[MainfooterComponent]
})
export class MainfooterCModule {}
