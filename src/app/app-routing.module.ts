import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import {OficinaServiciosComponent } from './pages/oficina-servicios/oficina-servicios.component'
import {CuponesComponent} from './pages/cupones/cupones.component';
import {OficinasUsuarioComponent} from './pages/oficinas-usuario/oficinas-usuario.component'
import {MostrarOficinaComponent } from './pages/mostrar-oficina/mostrar-oficina.component'
import { UpdateOfficeComponent } from './pages/update-office/update-office.component';
import { OficinaSolicitudesComponent } from './pages/oficina-solicitudes/oficina-solicitudes.component';
import { MostrarSolicitudComponent } from './pages/mostrar-solicitud/mostrar-solicitud.component';

import {IdentityGuard} from '../app/guards/identity.guard'
import { ReservasComponent } from './pages/reservas/reservas.component';
import { OficinasReservadasComponent } from './pages/oficinas-reservadas/oficinas-reservadas.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout/:sure',
    component: LoginComponent
  },
  {
    path: 'servicios',
    loadChildren: () => import('../app/pages/servicios/servicios.module').then(m => m.ServiciosModule),
    canActivate: [IdentityGuard]
  },
  {
    path: 'create-office',
    loadChildren: () => import('../app/pages/create-office/create-office.module').then(m => m.CreateOfficeModule),
    canActivate: [IdentityGuard]
  },
  {
    path: 'update-office/:id',
    component: UpdateOfficeComponent, canActivate: [IdentityGuard]
  },
  {
    path: 'reglas',
    component: ReglasComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'oficina-servicios',
    component: OficinaServiciosComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'oficinas-usuario',
    component: OficinasUsuarioComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'oficinas-solicides',
    component: OficinaSolicitudesComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'mostrar-solicitud/:id',
    component: MostrarSolicitudComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'mostrar-oficina/:id',
    component: MostrarOficinaComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'cupones',
    component: CuponesComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'reservas',
    component: ReservasComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: 'oficinas-reservadas',
    component: OficinasReservadasComponent,
    canActivate: [IdentityGuard]
  },
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
