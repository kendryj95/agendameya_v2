import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { SuscripcionRoutingModule } from "./suscripcion-routing.module";

import { SuscripcionComponent } from "./suscripcion.component";

@NgModule({
    imports: [
        CommonModule,
        SuscripcionRoutingModule,
        FormsModule
    ],
    declarations: [
        SuscripcionComponent,
    ]
})
export class SuscripcionModule { }