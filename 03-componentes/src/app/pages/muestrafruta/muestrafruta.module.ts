import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MuestrafrutaPage } from './muestrafruta.page';

const routes: Routes = [
  {
    path: '',
    component: MuestrafrutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MuestrafrutaPage]
})
export class MuestrafrutaPageModule {}
