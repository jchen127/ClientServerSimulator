import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../Shared/Services/Logging.service";
import {EventModel} from "../Shared/event.model";
import {corelogicService} from "../Shared/Services/corelogic.service";

@Component({
  selector: 'app-navigation-space',
  templateUrl: './navigation-space.component.html',
  styleUrls: ['./navigation-space.component.scss']
})
export class NavigationSpaceComponent implements OnInit {

  staffImageAsset: string = '/assets/images/staff/s0.svg';
  juvenileImageAsset: string = '/assets/images/juvenile/d0.svg';
  actionImageAsset: string = '/assets/images/action/judicate/judge.gif';

  actionToPerform: string = '';
  staffName: string = '';
  juvenileName: string = '';
  result: string = '';

  constructor(private logServe: LoggingService, private coreService: corelogicService) {

  }

  ngOnInit(): void {

    //wait 10 seconds for eventAdd to get a head start...
    setTimeout(() => {
      console.log('Initializing NavigationSpace...');
      this.coreService.coreEventRunner().subscribe(
        (result: EventModel) => {
         //
          this.staffImageAsset = result.staff.imageSrc;
          this.juvenileImageAsset = result.juvenile.imageSrc;
          this.actionImageAsset = result.action.imageAsset;

          this.staffName = result.staff.name;
          this.juvenileName = result.juvenile.name;
          this.actionToPerform = result.action.ActionToString();

          this.result = result.result;

          //you need to emit event from subject in order for it to fire...
          this.logServe.subjectServiceChanged.next(this.logServe.logArray);

        },
        error => {
          console.log("Bummer. CoreEventRunner stopped because EventLog is empty." + error);
        }

      )
    }, 10000);

  }


}
