import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-build-facility',
  templateUrl: './build-facility.component.html',
  styleUrls: ['./build-facility.component.scss']
})
export class BuildFacilityComponent implements OnInit {
  ngOnInit(): void {


  }

  inwardForm: FormGroup;

  constructor() {
    this.inwardForm = new FormGroup(
      {
        'fname': new FormControl("", Validators.required),
        'desc': new FormControl("", [Validators.required, Validators.minLength(3)])
      }

    );
  }

  onSubmit(){

    console.log(this.inwardForm);

  }








}
