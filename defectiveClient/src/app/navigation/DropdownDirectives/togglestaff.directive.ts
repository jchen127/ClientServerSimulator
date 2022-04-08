import {Directive, ElementRef, HostListener, OnInit} from "@angular/core";

@Directive({
  selector: '[appToggleStaff]'
})
export class ToggleStaff implements OnInit{



  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {



  }
  @HostListener('click')
  staffDropdownListener(){

    console.log(`we have heard this staffdropdownlistener here. FROM ToggleStaff Directive!!`);

  }
}
