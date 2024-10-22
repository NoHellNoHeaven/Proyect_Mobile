import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginFormPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  handleChange(event: any) {
    const { name, value } = event.target;
    (this as any)[name] = value;
  }

  async handleSubmit(event: Event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === this.email && u.password === this.password);

    if (user) {
      // Guardar información de sesión (NO guardar la contraseña)
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        tipoUsuario: user.tipoUsuario,
        idEstudiantil: user.idEstudiantil
      }));

      this.showToast('Inicio de sesión exitoso', `Bienvenido, ${user.nombre}!`, 'success');

      // Redirigir según el tipo de usuario
      switch (user.tipoUsuario) {
        case 'estudiante':
          this.router.navigate(['/alumno']);
          break;
        case 'profesor':
          this.router.navigate(['/profesor']);
          break;
        case 'administrativo':
          this.router.navigate(['/dashboard-administrativo']);
          break;
        default:
          this.router.navigate(['/dashboard']);
      }
    } else {
      this.showToast('Error de inicio de sesión', 'Email o contraseña incorrectos', 'danger');
    }
  }

  async showToast(header: string, message: string, color: string) {
    const toast = await this.toastController.create({
      header,
      message,
      color,
      duration: 2000
    });
    await toast.present();
  }
  navigate(path: string) {
    this.router.navigate([path]);
    console.log(`Navigating to ${path}`);
  }
}
