import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from "./clientes-routing.module";

import { ClientesComponent } from "./clientes.component";

@NgModule({
    imports: [
        CommonModule,
        ClientesRoutingModule,
        FormsModule
    ],
    declarations: [
        ClientesComponent,
    ]
})
export class ClientesModule { }