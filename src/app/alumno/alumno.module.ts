import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlumnoPage } from './alumno.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de incluir esto
    IonicModule,
    RouterModule.forChild([{ path: '', component: AlumnoPage }])
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
