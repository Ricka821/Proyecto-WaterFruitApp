import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-vermuestragua',
  templateUrl: './vermuestragua.page.html',
  styleUrls: ['./vermuestragua.page.scss'],
})
export class VermuestraguaPage implements OnInit {

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
  agregarAgua() {
    this.router.navigateByUrl('/muestra-agua/-1');
  }
  onClick() {
    console.log();
  }
  verMuestra(index) {

    this.router.navigateByUrl('/muestra-agua/' + index + '/' + JSON.stringify(this.dataLocal.listaRegistros[index]));
  }

}
