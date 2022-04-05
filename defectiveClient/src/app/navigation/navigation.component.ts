import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  juvenile_dropdown: boolean = false;
  staff_dropdown: boolean = false;
  facility_dropdown: boolean = false;

  @Output() newItemEvent  = new EventEmitter<string>();

  addStaffEmitter(value: string){
    this.newItemEvent.emit(value);
  }

  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

  RotateJuvenile(): boolean{

    this.juvenile_dropdown = !this.juvenile_dropdown;
    console.log(`rotate juvenile is: ${this.juvenile_dropdown}`);
    return this.juvenile_dropdown;
  }

  closeJuvenile(): boolean{

    this.juvenile_dropdown = false;
    console.log(`close juvenile is: ${this.juvenile_dropdown}`);
    return this.juvenile_dropdown;

  }

  RotateStaff(): boolean{



    this.staff_dropdown = !this.staff_dropdown;
    console.log(`rotate staff is: ${this.staff_dropdown}`);

    return this.staff_dropdown;

  }

  closeStaff(): boolean{
    this.staff_dropdown = false;
    console.log(`rotate staff is: ${this.staff_dropdown}`);

    return this.staff_dropdown;
  }


}
