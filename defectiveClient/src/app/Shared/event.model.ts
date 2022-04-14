import {FacilityModel} from "./Facility.Model";
import {StaffModel} from "./Staff.Model";
import {JuvenileModel} from "./Juvenile.Model";
import {logModel} from "./Log.Model";
import {ActionModel, myAction} from "./Action.model";


export class EventModel{


  constructor(public facility: FacilityModel,public action: ActionModel,public staff: StaffModel,public juvenile: JuvenileModel,public result: string) {
  }

  /***
   * Convert the current EventModel into logModel
   */
  toLog(): logModel{

    let curResult: logModel;

    curResult = new logModel(Date(), this.facility.name, this.action.ActionToString(), this.staff.name, this.juvenile.name, this.result );

    return curResult;
  }





}
