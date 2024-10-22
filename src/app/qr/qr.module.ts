import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPageRoutingModule } from './qr-routing.module';

import { QRPage } from './qr.page';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPageRoutingModule,
    RouterModule.forChild([])
  ],
  declarations: [QRPage]
})
export class QRPageModule {}
