import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrizPageRoutingModule } from './matriz-routing.module';

import { MatrizPage } from './matriz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrizPageRoutingModule
  ],
  declarations: [MatrizPage]
})
export class MatrizPageModule {}
