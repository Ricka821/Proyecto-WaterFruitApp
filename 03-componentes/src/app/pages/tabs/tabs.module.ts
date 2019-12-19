import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vermuestrafruta'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'vermuestrafruta',
        loadChildren: '../vermuestrafruta/vermuestrafruta.module#VermuestrafrutaPageModule'
      },
      {
        path: 'vermuestragua',
        loadChildren: '../vermuestragua/vermuestragua.module#VermuestraguaPageModule'
      },
      {
        path: 'iniciar-sesion',
        loadChildren: '../iniciar-sesion/iniciar-sesion.module#IniciarSesionPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
