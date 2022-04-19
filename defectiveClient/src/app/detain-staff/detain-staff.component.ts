import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-detain-staff',
  templateUrl: './detain-staff.component.html',
  styleUrls: ['./detain-staff.component.scss']
})
export class DetainStaffComponent implements OnInit {

  @ViewChild('ds') form1: NgForm | undefined;

  defaultAdditionalComment: string = 'NA';

  staffToBeDetained = {
    staff:'',
    detain:'',
    additional: ''
  };

  constructor() { }

  ngOnInit(): void {



  }

  /***
   * Wholly replaces the entire form
   */
  suggestUsername(){

   this.form1?.setValue(

      {
        userData: {
          staff: '02',
          detain: 'killing juvenile'
        },
        additional: 'nothing at all'
      }
    );

  }

  /***
   * partial form replace part of form
   * @param form
   */
  suggestUsernameViaPatch(form: NgForm){

    form.form.patchValue({

      userData: {
        staff: '002',
        detain: 'arbitrary'
      }

    });

  }


  onSubmit(form: NgForm){

    console.log(form);
    this.staffToBeDetained.staff = form.value.userData.staff;
    this.staffToBeDetained.detain = form.value.userData.detain;
    this.staffToBeDetained.additional = form.value.additional;
    console.log("form items submitted, resetting form...");
    form.reset();

  }

}
