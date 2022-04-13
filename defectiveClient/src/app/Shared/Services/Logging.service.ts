import {EventEmitter, Injectable, Output} from "@angular/core";
import {logModel} from '../Log.Model';
import {Subject} from "rxjs";

@Injectable()
export class LoggingService{

  logArray: {time: string, facility: string, action: string, staff: string, juvenile: string, result: string}[] = [];


  serviceChanged = new EventEmitter<logModel[]>();

  subjectServiceChanged = new Subject<logModel[]>();

  subjectActionServiceChanged = new Subject<logModel[]>();

  constructor(){

    // Initialize the LogArray
    this.logArray = [


    ];


  }

  addDetainLogService(): logModel[]{

    this.logArray.push(new logModel(Date(), '---', 'Detain Juvenile', '---','---', 'Click'));

    return this.logArray;
  }

  /***
   * In take juvenile to our detention facility. This is a sample implemented via EventEmitter
   */
  addIntakeLogService(): logModel[]{

    this.logArray.push(new logModel(Date(), '---', 'Intake Juvenile', '---','---', 'Click'));
    return this.logArray;
  }

  /***
   * This needs to be implemented later when the Core functionality is implemented.
   * @param Facility
   * @param Action
   * @param Result
   * @param Staff
   * @param Juvenile
   * @param time
   * @constructor
   */
  UpdateAppHistoryFooter( Facility: string, Action: string, Result: string, Staff?: string, Juvenile?: string, time?: string): logModel[]{

    /*
    Make sure all optional variables are initialized here.
    * */
    if(Staff === null || Staff === undefined){
      Staff = '---';
    }
    if(Juvenile === null || Juvenile === undefined){
      Juvenile = '---';
    }
    if(time === null || time === undefined){
      time = Date();
    }

    /**
     *
     */
    let pushableLogModel: logModel = new logModel(time, Facility, Action, Staff, Juvenile, Result);
    this.logArray.push(pushableLogModel);
    return this.logArray;


  }

}

