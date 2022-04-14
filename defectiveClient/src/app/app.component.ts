import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoggingService} from './Shared/Services/Logging.service';
import {logModel} from "./Shared/Log.Model";
import {corelogicService} from "./Shared/Services/corelogic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{


  logSave: logModel[] = [];
  title = 'defectiveClient';
  currentItem = "Facility";
  EventAdderInterval: any;

  constructor(private core: corelogicService){

  }

  parentSays(newItem: string){
    console.log(`parent(app.root) got something from child(navigation.component) ${newItem}`);
  }

  ngOnInit(){
    //Event adder gets called when the app first start...
    this.EventAdderInterval = this.core.coreEventAdder();

  }

  ngOnDestroy(): void {

    clearInterval(this.EventAdderInterval);


  }




}
