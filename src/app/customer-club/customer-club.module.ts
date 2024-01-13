import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerClubPageRoutingModule } from './customer-club-routing.module';

import { CustomerClubPage } from './customer-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerClubPageRoutingModule
  ],
  declarations: [CustomerClubPage]
})
export class CustomerClubPageModule {}
