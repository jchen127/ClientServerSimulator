import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoggingService} from "../Shared/Services/Logging.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-detain-juvenile',
  templateUrl: './detain-juvenile.component.html',
  styleUrls: ['./detain-juvenile.component.scss']
})
export class DetainJuvenileComponent implements OnInit {

@ViewChild('f') form: NgForm | undefined;

  disabledValue: boolean | undefined;
  myDefaultJuvenileId = '0';
  reasoning: string = '';

  constructor(private logServe: LoggingService) {

    /*
    * This is a sample logging service call with dummy data
    * */

  }

  onDetainYea(form: NgForm){
      console.log("onDetainYea form...");
      console.log(form);
  }

  onDetain(form: NgForm){

    console.log("sign up form is here");
    console.log(form);

  }

  ngOnInit(): void {



  }



}
