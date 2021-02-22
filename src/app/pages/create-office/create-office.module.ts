import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule  } from '@angular/Forms';

import {MaterialModule} from '../../material.module'
import { CreateOfficeRoutingModule } from './create-office-routing.module';
import { CreateOfficeComponent } from './create-office.component';



@NgModule({
  declarations: [CreateOfficeComponent],
  imports: [
    CommonModule,
    CreateOfficeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CreateOfficeModule { }
