import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'iniciar-sesion', loadChildren: './pages/iniciar-sesion/iniciar-sesion.module#IniciarSesionPageModule' },
  { path: 'muestra-agua/:index', loadChildren: './pages/muestra-agua/muestra-agua.module#MuestraAguaPageModule' },
  { path: 'muestra-agua/:index/:datos', loadChildren: './pages/muestra-agua/muestra-agua.module#MuestraAguaPageModule' },
  { path: 'muestrafruta/:index', loadChildren: './pages/muestrafruta/muestrafruta.module#MuestrafrutaPageModule' },
  { path: 'muestrafruta/:index/:datos', loadChildren: './pages/muestrafruta/muestrafruta.module#MuestrafrutaPageModule' },
  { path: 'vermuestrafruta', loadChildren: './pages/vermuestrafruta/vermuestrafruta.module#VermuestrafrutaPageModule' },
  { path: 'vermuestragua', loadChildren: './pages/vermuestragua/vermuestragua.module#VermuestraguaPageModule' },
  { path: 'recuperar', loadChildren: './pages/recuperar/recuperar.module#RecuperarPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
