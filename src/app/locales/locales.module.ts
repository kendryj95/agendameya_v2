import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { LocalesRoutingModule } from "./locales-routing.module";

import { LocalesComponent } from "./locales.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        LocalesRoutingModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        LocalesComponent,
    ]
})
export class LocalesModule { }