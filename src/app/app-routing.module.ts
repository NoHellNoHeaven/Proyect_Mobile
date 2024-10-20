import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path : 'login',
    loadChildren: () => import('src/app/login/login-routing.module').then( m => m.LoginPageRoutingModule) 
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then( m => m.ProfesorPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
