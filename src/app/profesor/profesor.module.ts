import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorPageRoutingModule } from './profesor-routing.module';

import { ProfesorPage } from './profesor.page';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorPageRoutingModule,
    RouterModule.forChild([])
  ],
  declarations: [ProfesorPage]
})
export class ProfesorPageModule {}
