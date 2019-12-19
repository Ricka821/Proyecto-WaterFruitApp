import { Component, OnInit } from '@angular/core';
import { NavController, IonSlides, IonTabs} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { Registro } from '../../modelos/Registro';
import { RegistroFruta } from '../../modelos/RegistroFruta';


@Component({
  selector: 'app-muestrafruta',
  templateUrl: './muestrafruta.page.html',
  styleUrls: ['./muestrafruta.page.scss'],
})
export class MuestrafrutaPage implements OnInit {

  r: RegistroFruta;
  index;

  constructor(public navCtrl: NavController, private router: Router, public dataLocal: DataServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('index');
    this.r = JSON.parse(this.route.snapshot.paramMap.get('datos'));
    if (this.r == null) {
      console.log('r es nulo');
      this.r = new RegistroFruta();
    }
  }

  verfruit() {
    this.router.navigateByUrl('/vermuestrafruta');
  }
  GuardarFruta() {
   // const reg: RegistroFruta = new RegistroFruta();
    // reg.ID = this.r.ID;
    // tslint:disable-next-line: triple-equals
    if (this.index == -1) {
      this.dataLocal.listasFrutas.unshift(this.r);
    } else {
      this.dataLocal.listasFrutas [this.index] = this.r;
    }
    this.dataLocal.guardarFruta();

    this.r = new RegistroFruta();
    this.router.navigateByUrl('/vermuestrafruta');
  }
}
