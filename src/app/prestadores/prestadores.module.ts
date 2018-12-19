import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { PrestadoresRoutingModule } from "./prestadores-routing.module";

import { PrestadoresComponent } from "./prestadores.component";

@NgModule({
    imports: [
        CommonModule,
        PrestadoresRoutingModule,
        FormsModule
    ],
    declarations: [
        PrestadoresComponent,
    ]
})
export class PrestadoresModule { }