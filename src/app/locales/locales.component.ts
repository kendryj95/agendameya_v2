import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})

export class LocalesComponent implements OnInit {

  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  time2: NgbTimeStruct = { hour: 14, minute: 55, second: 30 };

  constructor(){
    $(document).ready(()=>{ // Forzar a los botones de timepicker que no tenga margin bottom
      $('ngb-timepicker button').css('marginBottom', '0');
    })
  }

	ngOnInit() {

	}

}