import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {LoggingService} from '../Shared/Services/Logging.service';
import {logModel} from "../Shared/Log.Model";
import {corelogicService} from "../Shared/Services/corelogic.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {


  constructor(public log: LoggingService, public coreServe: corelogicService) {

  }


  curLog: logModel[] = [];

  ngOnInit(): void {

    //Done via EventEmitter...
    this.log.serviceChanged.subscribe(
      (newLog: logModel[]) => {
        //this.selectedLogEntry = newLog;
        this.curLog = newLog;
      }
    );

    //Done via Subject
    this.log.subjectServiceChanged.subscribe((newLog: logModel[]) => {

      this.curLog = newLog;

    });

    this.log.subjectActionServiceChanged.subscribe((newLog: logModel[]) => {

      this.curLog = newLog;
    });



  }

  ngOnDestroy(): void {
    this.log.serviceChanged.unsubscribe();
    this.log.subjectActionServiceChanged.unsubscribe();
    this.log.subjectServiceChanged.unsubscribe();
  }




}
