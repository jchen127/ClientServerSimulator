import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

enum Agent{

  Staff,
  Juvenile,
  Building

}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],

})
export class NavigationComponent implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent"; //useless code that don't do anything but demonstrates host binding

  juvenile_dropdown: boolean = false;
  staff_dropdown: boolean = false;

/*
  @HostListener("newItemEvent")
  raiseStaffEvent(){
    console.log("we have heard this newItemEvent here. FROM NAVIGATION COMPONENT!");
  }
*/

  facility_dropdown: boolean = false;

  @HostListener("mouseenter")
  RaiseTheFloorListener(){
    console.log(`Your Mouse just entered the Navigation.Component! This commercial is sponsored by Navigation.Component itself via HostListener. Because it listens to every single mouseenter to the Host component itself!`);
  }



  @Output() newItemEvent  = new EventEmitter<string>();
  addStaffEmitter(value: string){
    this.newItemEvent.emit(value);
  }

/*  @Output() newStaffEvent = new EventEmitter<boolean>();
  @HostListener('click')
  EmitMyStaffDropDown():boolean{

    console.log(`Emitting staff dropdown value: ${this.staff_dropdown}`);

    return this.staff_dropdown;
  }
*/
  @Input() item = '';

  constructor(private router: Router, private activeRouteInfo: ActivatedRoute) {


  }

  ngOnInit(): void {



  }

  GoToDetainStaff(): void{

    this.router.navigate(['/detainS']);

  }

  GoToRecruitStaff(): void{

    this.router.navigate(['/recruitS']);

  }

  GoToReleaseStaff():void{

    this.router.navigate(['/releaseS']);

  }

  GoToTrainStaff(): void{

    this.router.navigate(['/trainS']);

  }

  GoToAbandonFacility(){
      this.router.navigate(['abandonF']);
  }

  GoToBuildFacility(){
    this.router.navigate(['buildF']);
  }

  GoToRepairFacility(){
    this.router.navigate(['repairF']);
  }


  RotateFacility(): boolean {
    this.backgroundColor = 'blue'; //useless code that don't do anything but demonstrates host binding
    this.facility_dropdown = !this.facility_dropdown;
    console.log(`rotate juvenile is: ${this.facility_dropdown}`);
    if(this.facility_dropdown === true){
      this.close(Agent.Building);
    }else{
      this.close();
    }

    return this.facility_dropdown;
  }

  CloseFacility(): boolean{
    this.backgroundColor = 'transparent'; //useless code that don't do anything but demonstrates host binding
    this.facility_dropdown = false;
    console.log(`close juvenile is: ${this.facility_dropdown}`);


    return this.facility_dropdown;
  }

  RotateJuvenile(): boolean{

    this.juvenile_dropdown = !this.juvenile_dropdown;
    //console.log(`rotate juvenile is: ${this.juvenile_dropdown}`);
    if(this.juvenile_dropdown === true)
      this.close(Agent.Juvenile);
    else{
      this.close();
    }

    return this.juvenile_dropdown;
  }

  closeJuvenile(): boolean{

    this.juvenile_dropdown = false;
    console.log(`close juvenile is: ${this.juvenile_dropdown}`);



    return this.juvenile_dropdown;

  }

  RotateStaff(): boolean{

    this.staff_dropdown = !this.staff_dropdown;
    //console.log(`rotate staff is: ${this.staff_dropdown}`);
    if(this.staff_dropdown === true){
      this.close(Agent.Staff);
    }else{
      this.close();
    }


    return this.staff_dropdown;

  }

  closeStaff(): boolean{
    this.staff_dropdown = false;
    console.log(`rotate staff is: ${this.staff_dropdown}`);


    return this.staff_dropdown;
  }

  /**
   * Close everyone else EXCEPT "agent". agent being staff, building or juvenile.
   */
  close(agent?: Agent): void{

    if(agent === Agent.Staff){
      this.closeJuvenile();
      this.CloseFacility();
    }else if(agent === Agent.Juvenile){
      this.closeStaff();
      this.CloseFacility();
    }else if(agent === Agent.Building){
      this.closeStaff();
      this.closeJuvenile();
    }else{
      //close all if agent is not any of those

    }

  }

}
