import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { moon, sunny, logIn, personAdd, key } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDarkMode = false;
  icons = {
    moon,
    sunny,
    logIn,
    personAdd,
    key
  };

  constructor(private router: Router) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    // Aquí iría la lógica para cambiar el tema de la aplicación
  }
  navigate(path: string) {
    this.router.navigate([path]);
    console.log(`Navigating to ${path}`);
  }
}  
