import {Component, OnInit} from '@angular/core';
import {LoggingService} from './Shared/Services/Logging.service';
import {logModel} from "./Shared/Log.Model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  logSave: logModel[] = [];

  title = 'defectiveClient';

  currentItem = "Facility";

  constructor(){

  }

  parentSays(newItem: string){
    console.log(`parent(app.root) got something from child(navigation.component) ${newItem}`);
  }

  ngOnInit(){

  }




}
