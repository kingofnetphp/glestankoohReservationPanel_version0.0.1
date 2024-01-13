import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KabutarKhanePageRoutingModule } from './kabutar-khane-routing.module';

import { KabutarKhanePage } from './kabutar-khane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KabutarKhanePageRoutingModule
  ],
  declarations: [KabutarKhanePage]
})
export class KabutarKhanePageModule {}
