import { Injectable } from '@angular/core';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


// const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  constructor( private storage: Storage ) { }


  }

