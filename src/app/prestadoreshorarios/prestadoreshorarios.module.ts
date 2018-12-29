import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { PrestadoreshorariosRoutingModule } from "./prestadoreshorarios-routing.module";

import { PrestadoreshorariosComponent } from "./prestadoreshorarios.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PrestadoreshorariosRoutingModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        PrestadoreshorariosComponent,
    ]
})
export class PrestadoreshorariosModule { }