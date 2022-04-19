import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm} from "@angular/forms";
import {observable, Observable, of} from "rxjs";

@Component({
  selector: 'app-judicate-juvenile',
  templateUrl: './judicate-juvenile.component.html',
  styleUrls: ['./judicate-juvenile.component.scss']
})
export class JudicateJuvenileComponent implements OnInit {

  adjudicationForm: FormGroup;
  thoseWhoseIDCannot: string[] = ['s2', 's4'];
  thoseWhoseNameCannot: string[] = ['Ray', 'Brandon'];

  constructor() {


    this.adjudicationForm = new FormGroup(
      {
        '_juvenile_id': new FormControl(null),
        '_staff_data': new FormGroup({
          '_staff_name': new FormControl(null, [this.forbidenStaffNameValidator.bind(this)]),
          '_staff_id': new FormControl(null, null, this.CannotCertifyValidator.bind(this)
           )
        }),
        '_reason': new FormControl(null)
      }
    );

    //inborn value change listener
   // this.adjudicationForm.valueChanges.subscribe(value => console.log(value));

    //inborn status change listener
   // this.adjudicationForm.statusChanges.subscribe(status => console.log(status));

  }
  ngOnInit(): void {




  }

  PetitionSubmit(){
    console.log(this.adjudicationForm);
  }

  forbidenStaffNameValidator(control: AbstractControl): {[s: string]: boolean} | null{

    if(this.thoseWhoseNameCannot.find(element => control.value == element) == undefined){
      return null;
    }else{
      return {'nameIsForbidden': true};
    }

  }

  CannotCertifyValidator(control: AbstractControl): Promise<any> | Observable<any>{

    return new Promise<any>((resolve, reject) => {

      if(this.thoseWhoseIDCannot.find(element => control.value == element) == undefined){
        //not found
        resolve(null);
      }else{
        //found...
        resolve({'staffIsForbidden': true});
      }

    });

  }

  patchValues(){

    this.adjudicationForm.patchValue({

      '_staff_data': {
        '_staff_name': 'Joey',
        '_staff_id': 's3'

      }

    });

  }

  setValues(){

    this.adjudicationForm.setValue({
      '_juvenile_id': 'd1',
      '_staff_data': {
        '_staff_name': 'Joey',
        '_staff_id': 's3'

      },
      '_reason': 'victim is dead.'
    })

  }

}
