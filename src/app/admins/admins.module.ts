import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AdminsRoutingModule } from "./admins-routing.module";

import { AdminsComponent } from "./admins.component";

@NgModule({
    imports: [
        CommonModule,
        AdminsRoutingModule,
        FormsModule
    ],
    declarations: [
        AdminsComponent,
    ]
})
export class AdminsModule { }