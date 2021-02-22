import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import { OficinaServiciosComponent } from './pages/oficina-servicios/oficina-servicios.component';
import { CuponesComponent } from './pages/cupones/cupones.component';
import { OficinasUsuarioComponent } from './pages/oficinas-usuario/oficinas-usuario.component';
import { MostrarOficinaComponent } from './pages/mostrar-oficina/mostrar-oficina.component';
import { UpdateOfficeComponent } from './pages/update-office/update-office.component';

import {ComponentsModule} from './components/components.module';
import { OficinaSolicitudesComponent } from './pages/oficina-solicitudes/oficina-solicitudes.component';
import { MostrarSolicitudComponent } from './pages/mostrar-solicitud/mostrar-solicitud.component'

import {IdentityGuard} from '../app/guards/identity.guard'
import {LoginService} from '../app/services/login.service';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { OficinasReservadasComponent } from './pages/oficinas-reservadas/oficinas-reservadas.component';
import { MostrarReservaComponent } from './pages/mostrar-reserva/mostrar-reserva.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReglasComponent,
    OficinaServiciosComponent,
    CuponesComponent,
    OficinasUsuarioComponent,
    MostrarOficinaComponent,
    UpdateOfficeComponent,
    OficinaSolicitudesComponent,
    MostrarSolicitudComponent,
    ReservasComponent,
    OficinasReservadasComponent,
    MostrarReservaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ComponentsModule,
    AngularFileUploaderModule
    
    
  ],
  providers: [IdentityGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
