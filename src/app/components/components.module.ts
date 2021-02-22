import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule  } from '@angular/Forms';
import { ServiciosOficinaComponent } from './servicios-oficina/servicios-oficina.component';
import {MaterialModule} from '../material.module';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ImagenesOficinaComponent } from './imagenes-oficina/imagenes-oficina.component'



@NgModule({
  declarations: [ServiciosOficinaComponent, ImagenesOficinaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AngularFileUploaderModule
    
  ],
  exports: [
    ServiciosOficinaComponent,
    ImagenesOficinaComponent
  ]
})
export class ComponentsModule { }
