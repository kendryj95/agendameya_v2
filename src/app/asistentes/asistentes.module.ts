import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AsistentesRoutingModule } from "./asistentes-routing.module";

import { AsistentesComponent } from "./asistentes.component";

@NgModule({
    imports: [
        CommonModule,
        AsistentesRoutingModule,
        FormsModule
    ],
    declarations: [
        AsistentesComponent,
    ]
})
export class AsistentesModule { }