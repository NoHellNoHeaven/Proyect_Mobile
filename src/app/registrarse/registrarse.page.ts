import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {

  formData = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    tipoUsuario: '',
    idEstudiantil: ''
  };

  constructor(private router: Router, private toastController: ToastController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleSelectChange(event: any) {
    this.formData.tipoUsuario = event.detail.value;
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
  
    if (this.formData.password !== this.formData.confirmPassword) {
      this.showToast('Error', 'Las contraseñas no coinciden', 'danger');
      return;
    }
  
    if (this.formData.password.length < 8) {
      this.showToast('Error', 'La contraseña debe tener al menos 8 caracteres', 'danger');
      return;
    }
  
    const userData = {
      ...this.formData,
      id: Date.now().toString(),
      fechaRegistro: new Date().toISOString()
    };
  
    // Usa una aserción de tipo para decirle a TypeScript que es seguro eliminar esta propiedad
    delete (userData as any).confirmPassword;
  
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    this.showToast('Registro exitoso', 'Tu cuenta ha sido creada correctamente', 'success');
    // this.router.navigate(['/login']);
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
  


