import { NgModule,ModuleWithProviders } from '@angular/core';
import { LibRegisterPanelComponent } from './lib-register-panel.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
//import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LibRegisterPanelComponent
  ],
  imports: [
    MatInputModule,MatIconModule,MatFormFieldModule,FormsModule,CommonModule//,HttpClientModule
  ],
  exports: [
    LibRegisterPanelComponent
  ]
})
export class LibRegisterPanelModule { 

}
