import {FacilityModel} from "../Facility.Model";
import {StaffModel} from "../Staff.Model";
import {EmotionScore, JuvenileModel, PersonStatus} from "../Juvenile.Model";
import {logModel} from "../Log.Model";
import {EventEmitter, Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {EventModel} from "../event.model";
import {ActionModel, myAction} from "../Action.model";
import {LoggingService} from "./Logging.service";


@Injectable()
export class corelogicService{

  /***
   * Circumstances
   */
  EventLog: EventModel [] = [];
  facilities: FacilityModel[] = [];
  staffs: StaffModel[] = [];
  juveniles: JuvenileModel[] = [];
  resources: number = 999;

  /**
   * goes from 0 to 100. with 0 being the best and 100 being the worst. 50 is balanced.
   * Notoriety can increase or decrease the likelihood of being able to intake a juvenile or recruit staff
   *
   * P.S. we are not tracking this because it really isn't important to keep this updated at all times...
   */
  businessNotorietyRating: number = 50;


  /***
   * Trackers
   */
  onFacilityChangedTracker = new EventEmitter<FacilityModel[]>();
  onStaffChangedTracker = new Subject<StaffModel[]>();
  onJuvenileChangedTracker = new Subject<JuvenileModel[]>();
  onEventChangedTracker = new Subject<logModel[]>();
  onResourcesChangedTracker = new Subject<number>();

  /***
   * This will do a check on all the current personnel. then add event to the eventLog if certain conditions are met.
   * NOTE: this is a part of core logic. However, it is not necessary for our stated purpose. Which is to learn angular.
   * @private
   */
  private periodicCheckEventGenerator(){
      throw new Error("not yet implemented");
  }

  /***
   * This will generate a random event base on the given variables
   *
   *   facilities: FacilityModel[] = [];
   *   staffs: StaffModel[] = [];
   *   juveniles: JuvenileModel[] = [];
   *   resources: number = 999;
   *   businessNotorietyRating: number = 50;
   */
  private coreEventGenerator(): EventModel {

    //we do nothing if facility length is 0 as it is empty...
    if(this.facilities.length === 0)
      throw new Error('Oh crap. facilities is uhm. empty.');

    if(this.staffs.length === 0){
      throw new Error('Oh crap. staffs is uhm. empty');
    }

    if(this.juveniles.length === 0){
      throw new Error('oh crap. juveniles is empty.')
    }


    //generate facility
    let newFacility: FacilityModel = this.facilities[this.drawRandomNumber(this.facilities.length-1)];

    let actionOdd: number = this.drawRandomNumber(100);
    //75 or less = punish, 76 or above = rehab
    let action: ActionModel;
    if(actionOdd <= 75){
      action = new ActionModel(`assets/images/action/punish/f${this.drawRandomNumber(10)}.gif`,myAction.Punish);

    }else{
      action = new ActionModel(`assets/images/action/rehab/r${this.drawRandomNumber(7)}.gif`,myAction.Rehab);

    }


    let newStaff: StaffModel = this.staffs[this.drawRandomNumber(this.staffs.length)];

    let newJuvenile: JuvenileModel = this.juveniles[this.drawRandomNumber(this.juveniles.length)];

    let newResult: string = this.drawRandomNumber(100) <= 50? 'Failure': 'Success';


    let newEvent: EventModel = new EventModel(newFacility,action, newStaff, newJuvenile, newResult);

    return newEvent;

  }

  /***
   * Add Event to Event Log Every 20 seconds.
   */
  coreEventAdder(){

     return setInterval(
        () => {

          try{
            let curEvent = this.coreEventGenerator();
            this.EventLog.push(curEvent);


          }catch (e) {

            console.error('OMG HOUSE ON FIRE! COre Event Generator generated a grave error!' + e)
          }

        },
        20000);



  }

  /***
   * run event log and show them on display every 30 seconds.
   */
  coreEventRunner(): Observable<any>{

    return new Observable(observer => {

      setInterval(
        () => {

          if(this.EventLog.length === 0 )
            observer.error(null)

          let curEvent = this.EventLog.pop();

          if(curEvent != undefined)
           this.logServe.logArray.push(curEvent.toLog());

          observer.next(
           curEvent);

        },
        30000)

    });

  }


  private drawRandomNumber(max: number): number{
    return Math.floor(Math.random() * max);
  }

  constructor(public logServe: LoggingService) {

    /*
    One Facility
    * */
    this.facilities.push(new FacilityModel('Jane Plane Juvenile Facility', 'Detention HQ',
      `/assets/images/facility/b${this.drawRandomNumber(8)}.svg`, 0, 0));

    /***
     * Two Staffs
     */
    this.staffs.push(new StaffModel('Joseph', 'male',
      'Joseph is a former convict who has a history of child abuse and sexual assault. He was arrested multiple times on child endangerment charges.',
      46,75, 40, 50, 5, 50,PersonStatus.Healthy, `/assets/images/staff/s8.svg`,36)
    );

    this.staffs.push(new StaffModel('Greg', 'male',
      'Greg is an upstanding citizen in state of Maryland. He worked all his life and is regarded as kind and fun-to-be-around by many of his colleagues.',
      45,28, 70, 65, 0, 70,PersonStatus.Healthy, `/assets/images/staff/s3.svg`,36)
    );

    /***
     * five Juveniles
     */

    this.juveniles.push(

      new JuvenileModel(
        'Edie', 'Female',
        'Edie was a kind and nice girl. Her family went bankrupt and were jailed. She was left in the care of her abusive uncle where she slowly succumbed into juvenile delinquency. ' +
        'Now she hates everyone around. Maybe someday, she will get better. Someday, but that someday is not today.', 15, 80, 10, EmotionScore.Uncooperative, PersonStatus.Healthy,
        `/assets/images/juvenile/d14.svg`
      )

    );

    this.juveniles.push(

      new JuvenileModel(
        'Demson', 'Male',
        'Demson is jailed for his petty thievery at a local grocery shop. Otherwise, he is mild mannered and well behaved.',
        15, 15, 5, EmotionScore.Content, PersonStatus.Healthy,
        `/assets/images/juvenile/d15.svg`
      )

    );



    this.juveniles.push(

      new JuvenileModel(
        'Marien', 'Male',
        'Marien is falsely jailed yesterday on the charges of robbing private property.',
        13, 50, 5, EmotionScore.Uncooperative, PersonStatus.Healthy,
        `/assets/images/juvenile/d2.svg`
      )

    );

    this.juveniles.push(

      new JuvenileModel(
        'Delvin', 'Female',
        'Delvin is not happy. She think she is falsely detained.',
        13, 49, 5, EmotionScore.Content, PersonStatus.Healthy,
        `/assets/images/juvenile/d5.svg`
      )

    );

    this.juveniles.push(

      new JuvenileModel(
        'Malvin', 'Male',
        'Malvin is malvin. He is a little cool and bright. Pretty awesome.',
        16, 62, 5, EmotionScore.Content, PersonStatus.Healthy,
        `/assets/images/juvenile/d4.svg`
      )

    );

  }






}
