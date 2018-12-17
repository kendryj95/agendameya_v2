import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { SuperadminsRoutingModule } from "./superadmins-routing.module";

import { SuperadminsComponent } from "./superadmins.component";

@NgModule({
    imports: [
        CommonModule,
        SuperadminsRoutingModule,
        FormsModule
    ],
    declarations: [
        SuperadminsComponent,
    ]
})
export class SuperadminsModule { }