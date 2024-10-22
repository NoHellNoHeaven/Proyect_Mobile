import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  icono="switch-oscuro"
  constructor(private router: Router, private anim: AnimationController) {
    addIcons({ eye, lockClosed })
  }
  ngOnInit(){
    this.animarLogo();
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
  animarLogo(){
    this.anim
      .create()
      .addElement(document.querySelector('#logo')!)
      .duration(500)
      .iterations(Infinity)
      .direction('alternate')
      .easing('ease-in-out')
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(8deg) translateX(10px)' },
        { offset: 0.5, transform: 'scale(1) rotate(0deg)' },
        { offset: 1, transform: 'scale(1) rotate(-8deg) translateX(-10px) ' },
      ])
      .play();
  }
  
}
