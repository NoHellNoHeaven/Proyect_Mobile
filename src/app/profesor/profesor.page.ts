import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {
  icono="switch-oscuro"

  constructor(private router: Router, private anim: AnimationController) { }

  ngOnInit() {
    this.aparecerQr();
  }
  cambiarTema(){
    if(this.icono == "switch-oscuro"){
      document.documentElement.style.setProperty("--fondo","#373737")
      this.icono ="switch-claro"
    }else{
      document.documentElement.style.setProperty("--fondo","#454E5F")
      this.icono ="switch-oscuro"
    
    }
  }
  navegar(){
    this.router.navigate(['./inicio'])
  }
  aparecerQr(){
    
    this.anim
    .create()
    .addElement(document.querySelector('#qr')!)
    .duration(1000)
    .easing('ease-in-out')
    .keyframes([
      { offset: 0, opacity: '0', transform: 'scale(0.5) rotate(8deg) translateX(10px)' },
      { offset: 0.5, opacity: '0.5', transform: 'scale(1) rotate(0deg)' },
      { offset: 1, opacity: '1', transform: 'scale(1) rotate(0deg) translateX(0px)' },
    ])
    .play();
  }
}
