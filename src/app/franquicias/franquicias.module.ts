import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FranquiciasRoutingModule } from "./franquicias-routing.module";

import { FranquiciasComponent } from "./franquicias.component";

@NgModule({
    imports: [
        CommonModule,
        FranquiciasRoutingModule,
        FormsModule
    ],
    declarations: [
        FranquiciasComponent,
    ]
})
export class FranquiciasModule { }