import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ServiciosRoutingModule } from "./servicios-routing.module";

import { ServiciosComponent } from "./servicios.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ServiciosRoutingModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        ServiciosComponent,
    ]
})
export class ServiciosModule { }