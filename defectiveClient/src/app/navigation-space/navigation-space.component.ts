import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../Shared/Services/Logging.service";

@Component({
  selector: 'app-navigation-space',
  templateUrl: './navigation-space.component.html',
  styleUrls: ['./navigation-space.component.scss']
})
export class NavigationSpaceComponent implements OnInit {

  constructor(private logServe: LoggingService) { }

  ngOnInit(): void {



  }


}
