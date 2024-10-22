import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router
import { Alumno } from './alumno.interface'; // Asegúrate de importar la interfaz

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage{
  alumnos: Alumno[] = [];
  alumnoForm: FormGroup;
  darkTheme: boolean = false; // Estado para el tema

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Inicializa el formulario
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      matricula: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Puedes inicializar tu lista de alumnos aquí si es necesario
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const nuevoAlumno: Alumno = {
        id: this.alumnos.length + 1, // Asigna un ID
        nombre: this.alumnoForm.value.nombre,
        matricula: this.alumnoForm.value.matricula,
        curso: this.alumnoForm.value.curso
      };
      this.alumnos.push(nuevoAlumno); // Agrega el nuevo alumno
      this.alumnoForm.reset(); // Limpia el formulario
    }
  }

  eliminarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
  }

  // Función para cambiar el tema
  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.setAttribute('color-theme', this.darkTheme ? 'dark' : 'light');
  }

  // Función para navegar a otra página
  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
