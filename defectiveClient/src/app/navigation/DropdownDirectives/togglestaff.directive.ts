import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appToggleStaff]'
})
export class ToggleStaff implements OnInit{

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {

    this.elementRef.nativeElement.style.display = 'none';

  }

}
