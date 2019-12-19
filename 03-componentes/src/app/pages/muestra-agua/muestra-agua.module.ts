import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MuestraAguaPage } from './muestra-agua.page';


const routes: Routes = [
  {
    path: '',
    component: MuestraAguaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MuestraAguaPage]
})
export class MuestraAguaPageModule {}

