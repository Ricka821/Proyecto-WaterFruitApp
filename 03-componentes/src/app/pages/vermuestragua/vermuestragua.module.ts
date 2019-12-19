import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VermuestraguaPage } from './vermuestragua.page';

const routes: Routes = [
  {
    path: '',
    component: VermuestraguaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VermuestraguaPage]
})
export class VermuestraguaPageModule {}
