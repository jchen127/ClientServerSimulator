import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../Shared/Services/Logging.service";

@Component({
  selector: 'app-detain-juvenile',
  templateUrl: './detain-juvenile.component.html',
  styleUrls: ['./detain-juvenile.component.scss']
})
export class DetainJuvenileComponent implements OnInit {

  constructor(private logServe: LoggingService ) {

    /*
    * This is a sample logging service call with dummy data
    * */



  }

  ngOnInit(): void {



  }



}
