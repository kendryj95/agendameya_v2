import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prestadoreshorarios',
  templateUrl: './prestadoreshorarios.component.html',
  styleUrls: ['./prestadoreshorarios.component.scss']
})

export class PrestadoreshorariosComponent implements OnInit {

  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  time2: NgbTimeStruct = { hour: 14, minute: 55, second: 30 };

  constructor() {
     $(document).ready(()=>{ // Forzar a los botones de timepicker que no tenga margin bottom
       $('ngb-timepicker button').css('marginBottom', '0');
       console.log($('ngb-timepicker button'));
     })
  }

	ngOnInit() {

	}

}