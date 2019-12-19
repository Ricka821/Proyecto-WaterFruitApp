import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'leaf',
      name: 'Ver Muestras de Fruta',
      redirectTo: '/vermuestrafruta'
    },
    {
      icon: 'water',
      name: 'Ver Muestras de Agua',
      redirectTo: '/vermuestragua'
    }
  ];

  constructor( private router: Router) { }

  ngOnInit() {
  }
  toggleMenu() {

  }
      viewwater() {
        this.router.navigateByUrl('/vermuestragua');
  }
      viewfruit() {
        this.router.navigateByUrl('/vermuestrafruta');
  }
  logout() {
        this.router.navigateByUrl('/iniciar-sesion');
  }

      Agua() {
        this.router.navigateByUrl('muestra-agua');
      }
      Fruta() {
        this.router.navigateByUrl('/muestrafruta');
      }
      Info() {
        this.router.navigateByUrl('/home');
      }
}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;

}
