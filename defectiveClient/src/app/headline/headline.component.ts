import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import {WidthServiceService} from "../width-service.service";


@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit, OnDestroy {

  detainJuvenileText: string;
  juvenileDetained: number;

  detentionFacilityText: string;
  detentionFacilityAvailable: number; //each detention facility can only take 50 juveniles

  staffText: string;
  staffsAvailable: number; //1 staff per 10 juveniles. Otherwise juveniles will be upset.

  logoText: string;

  curWinSize: number = screen.width;

  constructor(private windowService: WidthServiceService) {
    this.detentionFacilityText = 'Detention Facility';
    this.detainJuvenileText = 'Detained Juvenile';
    this.logoText = 'Department of Juvenile Service';
    this.staffText = "Available Staffs";
    this.juvenileDetained = 0;
    this.detentionFacilityAvailable = 0;
    this.staffsAvailable = 0;


  }


  @HostListener('window:resize') onWindowResize(eventData: Event): void{

    //console.log(`current windows size after resize:  ${this.curWinSize}`);
   //this.curWinSize= window.innerWidth;
    this.curWinSize= screen.width;

  }


  /***
   * returns false if screen.width is lesser than 768 pixel otherwise return true
   *
   * @returns boolean false if screen.width is lesser than 768 pixel otherwise return true
   */
  showIfGreater768(): boolean{

    if(this.curWinSize<768){
      return false;
    }
    return true;

  }


  ngOnInit(): void {




  }

  ngOnDestroy(): void {



  }



  /***
   * This should be done via CSS because this is inherently not an interactive component.
   * But for the sake of this project, I will make this angular. Inherently
   * non-interactive component that never change should be coded in CSS in my opinion.
   */
  GrayBorderFirstPill(): object{

    return {'border-color': 'gray', 'border-style': 'solid', 'border-width': '1px'  };
  }

  GrayBorderSecondPill(): object{

    return {'border-style': 'solid solid solid none', 'border-color': 'gray', 'border-width': "1px"}

  }


}
