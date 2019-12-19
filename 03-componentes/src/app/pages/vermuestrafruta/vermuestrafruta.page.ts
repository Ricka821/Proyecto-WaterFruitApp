import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-vermuestrafruta',
  templateUrl: './vermuestrafruta.page.html',
  styleUrls: ['./vermuestrafruta.page.scss'],
})
export class VermuestrafrutaPage implements OnInit {

  constructor(private router: Router, public dataLocal: DataServiceService) { }

  ngOnInit() {


  }
  viewwater() {
    this.router.navigateByUrl('/vermuestragua');
}
  viewfruit() {
    this.router.navigateByUrl('/vermuestrafruta');
}
Agua() {
  this.router.navigateByUrl('/muestra-agua');
}
Fruta() {
  this.router.navigateByUrl('/muestrafruta');
}

logout() {
  this.router.navigateByUrl('/iniciar-sesion');
}
agregarFruta() {
this.router.navigateByUrl('/muestrafruta/-1');
}

verMuestraFruta(index) {
  this.router.navigateByUrl('/muestrafruta/' + index + '/' + JSON.stringify(this.dataLocal.listasFrutas[index]));
}

}
