import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoggingService} from "../Shared/Services/Logging.service";
import {logModel} from "../Shared/Log.Model";
import {FormControl, NgForm, Validators} from "@angular/forms";
import {UserService} from "../Shared/Services/user.service";
import {corelogicService} from "../Shared/Services/corelogic.service";

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
  constructor(private router: Router, private activeRouteInfo: ActivatedRoute, public log: LoggingService, private userService: UserService, private core: corelogicService) {}
  ngOnInit(): void {

  }

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent"; //useless code that don't do anything but demonstrates host binding

  juvenile_dropdown: boolean = false;
  staff_dropdown: boolean = false;


  @ViewChild("loginform") formLogin: NgForm | undefined;
  @ViewChild("logoutForm") formLogout: NgForm | undefined;

  loggedIn = false;
  email="";
  password="";


  /***
   * Validate user input first.
   * @constructor
   */
  PreScreen(): boolean{

    if(this.email.length <= 1 ){
      console.log("email length is less than 1");
      this.ClearEmailAndPasswordField();
      return false;
    }

    let validationResult = Validators.email(new FormControl(this.email))?.email;
    if(validationResult === true){
      //validation failed. we do nothing
      console.error("email validation failed.")
      this.ClearEmailAndPasswordField();
      return false;
    }

    return true;
  }

  OnLogin(){
    console.log("OnLogin(): " + this.formLogin);
    console.log(`Username: ${this.email} Password: ${this.password}`);

    if(this.PreScreen() === false){
      return;
    }

    let validationResult = Validators.email(new FormControl(this.email))?.email;
    if(validationResult === undefined){
      //do login here now that validation result is fine
      this.userService.LoginUser(this.email, this.password).subscribe(

        data => {

       //  console.log("Logging in user(): " + JSON.stringify(data));
      //    console.log( "id is: " + (<{"id": string, "ttl":number, "created":string, "userId":string}>data).id);

          this.userService.setSecurityToken((<{"id": string, "ttl":number, "created":string, "userId":string}>data).id);
          this.userService.setUserName(this.email);
          this.userService.setPassword(this.password);
          this.loggedIn = true;

          console.log("security token from userservice is: " + this.userService.getSecurityToken());

          //check to generate juveniles pool on the server
          this.core.JuvenileNumGreaterThan100();


        },
        error => {
        //  console.log("logging in error(): " + JSON.stringify(error));
          this.ClearEmailAndPasswordField();

        }

      );
    }


  }

  OnLogout(form: NgForm){
    console.log("OnLogout():" + form);
    this.loggedIn = false;
    this.ClearEmailAndPasswordField();
    this.userService.clearUserService();
  }

  OnRegister(): void{
    console.log("OnRegister()" + this.formLogin);
    console.log(`Username: ${this.email} Password: ${this.password}`);

    if(this.PreScreen() === false){
       return;
    }

    let validationResult = Validators.email(new FormControl(this.email))?.email;
    if(validationResult === undefined){
      //validation success
      this.userService.RegisterUser(this.email, this.password).subscribe(
        x => {console.log(x);},
        y => {
          alert(y.error.error.message);

        });
    }
    this.ClearEmailAndPasswordField();
    //this.userService.RegisterUser(this.email, this.password).subscribe(x => console.log(x));

  }

  private ClearEmailAndPasswordField(){
    this.email = "";
    this.password = "";
  }

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



  /***
   * Specifically, only when IntakeJuvenile is clicked.
   */
  onIntakeSelected(){
    console.log("onIntakeSelected Entered...");
    this.log.serviceChanged.emit(this.log.addIntakeLogService());
  }

  /***
   * Specifically, only when DetainJuvenile is clicked.
   * @constructor
   */
  OnDetainSelected(){
    console.log("onDetainSelected Entered...");
    this.log.subjectServiceChanged.next(this.log.addDetainLogService());
  }

  /***
   * Specifically, when an action is clicked on navigation menu...
   * @constructor
   */
  OnActionSelected(facility: string, action: string, result: string, staff?: string, juvenile?: string){

      console.log("onActionSelected Entered");
      this.log.subjectActionServiceChanged.next(this.log.UpdateAppHistoryFooter(facility, action, result, staff, juvenile));

  }






  GoToLogin(): void{
    console.log("go to login clicked");
    this.router.navigate(["navigation", "login"]);
  }

  GoToRegister(): void{
    this.router.navigate(["navigation", "register"]);
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




    return this.juvenile_dropdown;

  }

  RotateStaff(): boolean{

    this.staff_dropdown = !this.staff_dropdown;

    if(this.staff_dropdown === true){
      this.close(Agent.Staff);
    }else{
      this.close();
    }


    return this.staff_dropdown;

  }

  closeStaff(): boolean{
    this.staff_dropdown = false;



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

  RegisterUser(){

  }

}
