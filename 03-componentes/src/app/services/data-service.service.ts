import { Injectable } from '@angular/core';
import { Registro } from '../modelos/Registro';
import { Storage } from '@ionic/storage';
import { RegistroFruta } from '../modelos/RegistroFruta';
import { File } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  listaRegistros: Registro[] = [];
  listasFrutas: RegistroFruta[] = [];

  constructor(public storage: Storage, private file: File, public http: HttpClient) {
    this.http.get('localhost:3000/agua/ingresar/' + 'hola ionic').subscribe(data => {
      console.log(data)
    })
    this.storage.get('registros').then(r => {
      this.listaRegistros = r || [];
    });
    this.storage.get('registrofrutas').then(r => {
      this.listasFrutas = r || [];
    });

  }

  guardarRegistro(ID: string, Fuente: string, Uso: string, Descripcion: string, Compañia: string,
    NumRancho: string, NomRancho: string, Region: string, Cultivo: string, Analisis: string[]) {

    const nuevoRegistro = new Registro();
    this.listaRegistros.unshift(nuevoRegistro);

    const nuevoRegistroFruta = new RegistroFruta();
    this.listasFrutas.unshift(nuevoRegistroFruta);

  }

  guardarAgua() {
    // this.listaRegistros.unshift( registro );
    console.log(this.listaRegistros);
    this.storage.set('registros', this.listaRegistros);

  }

  guardarFruta() {
    // this.listasFrutas.unshift( registrofruta );
    console.log(this.listasFrutas);
    this.storage.set('registrofrutas', this.listasFrutas);

  }


  crearArchivoFisico(text: string) {
    this.file.checkFile(this.file.dataDirectory, 'registroFruta.csv')
      .then(existe => {
        console.log('Existe archivo?', existe);
        return this.escribirEnArchivo(text);
      })
      .catch(error => {

        return this.file.createFile(this.file.dataDirectory, 'registroFruta.csv', false)
          .then(creado => this.escribirEnArchivo(text))
          .catch(err2 => console.log('No se pudo crear el archivo', err2));
      });
  }

  async escribirEnArchivo(text: string) {

    await this.file.writeExistingFile(this.file.dataDirectory, 'registroFruta.csv', text);
    const archivo = `${this.file.dataDirectory}registroFruta.csv`;
    const email = {
      to: 'rl475154@gmail.com',
      attachments: [
        archivo
      ],
      subject: 'xd',
      body: 'lo que sea',
      isHtml: true

    };
    // this.emailComposer.open(email);
  }

  EnviarCorreo() {
    const arrTemp = [];
    arrTemp.push('ID, Compañia, Rancho');
    this.listasFrutas.forEach(elemento => {
      const archivo = `${elemento.ID},${elemento.Compania},${elemento.NomRanch.replace(',', ' ')}\n`;
      arrTemp.push(archivo);
    });
    this.crearArchivoFisico(arrTemp.join(''));
  }

}
