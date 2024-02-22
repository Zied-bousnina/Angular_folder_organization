import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprodectRoutingModule } from './addprodect-routing.module';
import { AddprodectComponent } from './addprodect/addprodect.component';


@NgModule({
  declarations: [
    AddprodectComponent
  ],
  imports: [
    CommonModule,
    AddprodectRoutingModule
  ]
})
export class AddprodectModule { }
