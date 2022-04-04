import {Component, OnInit} from '@angular/core';
import {Medicine} from '../Shared/Medicine.Model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  //we need to retrieve this list from server. if no item exist, then 3 sample medicines will be created.
  medicines: Medicine[] = [];

  jaggedMedicines: Medicine[][] = [];

  //this is used for making popular
  m_icon: string[];

  m_color: string[];

  constructor() {

    //create medicine icons for random draw via ngclass
    this.m_icon = [

      "fa-solid fa-capsules",
      "fa-solid fa-pills",
      "fa-solid fa-syringe",
      "fa-solid fa-tablets",
      "fa-solid fa-cannabis",
      "fa-solid fa-joint"
    ];

    //create colors for random draw via ngstyle
    this.m_color = [

      "Blue",
      "Black",
      "Crimson",
      "DarkMagenta",
      "DarkOrchid",
      "DarkSeaGreen",
      "DarkSlateGray",
      "DeepSkyBlue",
      "FireBrick",
      "YellowGreen",
      "Tomato"

    ];


    //TODO retrieve list of medicines from server and populate the medicine array

    //this will create sample medicines
    if(this.medicines.length === 0){

      this.medicines = [
        new Medicine('Anti-depressant', 'Heals target for a specified amount of status', this.SpitMedIcon(), this.SpitMedColor(), 'criminality1', 'kindness1'),
        new Medicine('Anti-psychotics', 'Heals target for a specified amount of status', this.SpitMedIcon(), this.SpitMedColor(), 'criminality1', 'kindness1'),
        new Medicine('Tranquilliser', 'Heals target for a specified amount of status', this.SpitMedIcon(), this.SpitMedColor(), 'criminality1', 'kindness1'),
        new Medicine('Sleeping Pill', 'Heals target for a specified amount of status', this.SpitMedIcon(), this.SpitMedColor(), 'criminality1', 'kindness1'),
        new Medicine('Mood Stabilizer', 'Heals target for a specified amount of status', this.SpitMedIcon(), this.SpitMedColor(), 'criminality1', 'kindness1'),
      ];

    }

    //process the medicine array
    this.jaggedMedicines = this.ConvertArrayToJaggedArray(3, this.medicines);

  }

  private ConvertArrayToJaggedArray(maxElementPerBucket: number, arr: Medicine[]){

    let jaggedArray = [];


    for(let i=0; i<arr.length;){

    if(i+3 < arr.length){
      jaggedArray.push(arr.slice(i,3));
      i=i+3;
    }else{
      jaggedArray.push(arr.slice(i));
      break;
    }
    }
    return jaggedArray;

  }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  SpitMedColor(): string{

    let return_value = this.m_color[this.getRandomInt(0, this.m_color.length-1)];

    return return_value;
  }

  SpitMedIcon(): string{

    let return_value = this.m_icon[this.getRandomInt(0, this.m_icon.length-1)];


    return return_value;

  }

  ngOnInit(): void {


  }

}
