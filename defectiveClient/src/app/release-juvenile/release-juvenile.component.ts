import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {placeholdersToParams} from "@angular/compiler/src/render3/view/i18n/util";

@Component({
  selector: 'app-release-juvenile',
  templateUrl: './release-juvenile.component.html',
  styleUrls: ['./release-juvenile.component.scss']
})
export class ReleaseJuvenileComponent implements OnInit {

  juvenileReleaseForm: FormGroup;

  constructor() {

    this.juvenileReleaseForm = new FormGroup({


    });

  }

  ngOnInit(): void {
    this.juvenileReleaseForm = new FormGroup({

      '_juvenile_id': new FormControl(null),
      '_staff_ids': new FormArray([]),
      '_reason_for_release': new FormControl(null)


    });
  }

  getStaffsArray(): AbstractControl[]{
    return (this.juvenileReleaseForm.get('_staff_ids') as FormArray).controls;




  }

  OnAddStaff(){
    console.log("onAddStaff()");
    const control = new FormControl(null);
    let retrievedStaffArray: FormArray = <FormArray> this.juvenileReleaseForm.get('_staff_ids');

    retrievedStaffArray.push(control);

  }

  releaseSubmit(){
    console.log("releaseSubmit() entered...");
    console.log(this.juvenileReleaseForm);
  }


}
