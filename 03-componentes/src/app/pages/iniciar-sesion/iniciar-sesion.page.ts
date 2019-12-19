import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IonSlides, NavController} from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';
import { Router } from '@angular/router';
import { Registro } from '../../modelos/Registro';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})

export class IniciarSesionPage implements OnInit {
  constructor(public navCtrl: NavController, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }


  // login( fLogin: NgForm ) {
  // console.log( fLogin.valid ); }

  // registro( fRegistro: NgForm ) {
 //  console.log( fRegistro.valid ); }

  home() {
    this.router.navigateByUrl('/vermuestrafruta');
 //    this.navCtrl.navigateRoot('/InicioPage');
  }

  Ingresar() {
    this.router.navigateByUrl('/fLogin');
  }

  Registrar() {
    this.router.navigateByUrl('/fRegistro');
  }

  metodo() {
    console.log('entro');
  }
  inicio() {
    this.router.navigateByUrl('/');
  }
}
