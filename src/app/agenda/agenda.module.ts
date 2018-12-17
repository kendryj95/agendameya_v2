import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { NgbModalModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { AgendaRoutingModule } from "./agenda-routing.module";

import { AgendaComponent } from "./agenda.component";
import { DateTimePickerComponent } from './date-time-picker.component';

@NgModule({
    imports: [
        CommonModule,
        AgendaRoutingModule,
        CalendarModule.forRoot(),
        NgbModalModule.forRoot(),
        NgbDatepickerModule.forRoot(),
        NgbTimepickerModule.forRoot(),
        FormsModule
    ],
    declarations: [
        AgendaComponent,
        DateTimePickerComponent
    ]
})
export class AgendaModule { }
