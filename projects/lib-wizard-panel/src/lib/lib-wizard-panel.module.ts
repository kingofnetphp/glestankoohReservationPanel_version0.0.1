import { NgModule ,ModuleWithProviders} from '@angular/core';
import { LibWizardPanelComponent } from './lib-wizard-panel.component';
import {LibReservPanelModule} from 'lib-reserv-panel';
import {LibRegisterPanelModule} from 'lib-register-panel';
import { CommonModule } from '@angular/common';
//import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    LibWizardPanelComponent
  ],
  imports: [
  	LibRegisterPanelModule,CommonModule, FormsModule,ReactiveFormsModule ,MatInputModule, MatFormFieldModule,
    MatStepperModule,/* NoopAnimationsModule ,*/ MatIconModule,LibReservPanelModule,/*HttpClientModule*/
    MatSnackBarModule

  ],
  exports: [
    LibWizardPanelComponent
  ]
})
export class LibWizardPanelModule {

 }
