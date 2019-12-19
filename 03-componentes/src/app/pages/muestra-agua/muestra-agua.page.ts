import { Component, OnInit } from '@angular/core';
import { MuestraAguaPageModule } from './muestra-agua.module';
import { NavController, IonSlides } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { Registro } from '../../modelos/Registro';

@Component({
  selector: 'app-muestra-agua',
  templateUrl: './muestra-agua.page.html',
  styleUrls: ['./muestra-agua.page.scss'],
})

export class MuestraAguaPage implements OnInit {

  index;
  r: Registro;

  f: string[] = [];
  public analisis = [
    { val: 'Coliformes Fecales', isChecked: false },
    { val: 'Coliformes Totales', isChecked: false },
    { val: 'Ecoli', isChecked: false },
    { val: 'Salmonella', isChecked: false },
    { val: 'Enterococus', isChecked: false }
  ];

  constructor(public navCtrl: NavController, public router: Router,
              public dataLocal: DataServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.index = this.route.snapshot.paramMap.get('index');
    this.r = JSON.parse(this.route.snapshot.paramMap.get('datos'));
    if (this.r == null) {
      console.log('r es nulo');
      this.r = new Registro();
    }
  }

  veragua() {
    this.router.navigateByUrl('/vermuestragua');
  }

  GuardarAgua() {
    // this.dataLocal.listaRegistros( this.GuardarAgua );
    // this.dataLocal.guardarAgua( this.guardarRegistro );
    // const reg: Registro = new Registro();
    // reg.ID = this.r.ID;
    // tslint:disable-next-line: triple-equals
    if (this.index == -1) {
      this.dataLocal.listaRegistros.unshift( this.r );
    } else {
      this.dataLocal.listaRegistros [this.index] = this.r;
    }
    this.dataLocal.guardarAgua();
    this.llenar();
    this.r.Analisis = this.f;
    this.f = [];
    this.r = new Registro();
    this.router.navigateByUrl('/vermuestragua');
    // regresar a la pagina del listado
  }

  llenar() {
    this.analisis.forEach(e => {
      if (e.isChecked) {
        this.f.push(e.val);
      }
    });
  }

  validar() {

    return true;

    return false;
  }

}
