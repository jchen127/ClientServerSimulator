import { Component, OnInit } from '@angular/core';
import {WidthServiceService} from "../width-service.service";

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  detainJuvenileText: string;
  detentionFacilityText: string;
  logoText: string;

  constructor(private windowService: WidthServiceService) {
    this.detentionFacilityText = 'Detention Facility';
    this.detainJuvenileText = 'Detained Juvenile';
    this.logoText = 'Defective Juvenile Service';
  }

  ngOnInit(): void {

    console.log(`OnInit() ${window.innerWidth}`);

  }

  /**
   * TODO:
   * this method needs to be implemented by service dependency injection so the calling method via *ngIf will structurally remove
   * the content if ViewWidth is lesser than 768px
   *
   * @return {boolean} true or false
   */
  visibleIfGreaterThanXSWidth(): boolean{

   // currently, set to true at all time, meaning visible at all times.

    console.log(`Current width is notated as: ${this.windowService.getNativeWindow().screen.width}`);

    return true;
  }

}
