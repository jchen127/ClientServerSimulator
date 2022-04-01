import {Directive, ElementRef, HostListener, OnInit} from "@angular/core";


@Directive({
  selector: '[appResize]'
})
export class ResizeDirective implements OnInit{

  curWinSize: number = 0

  constructor(private elementRef: ElementRef){

  }


  ngOnInit(): void {
    console.log(`current windows size after resize 0:  ${this.curWinSize}`);
  this.curWinSize = window.innerWidth;

  }


 @HostListener('window:resize') onWindowResize(eventData: Event): void{


   this.curWinSize= window.innerWidth;
   console.log(`current windows size after resize 1:  ${this.curWinSize}`);
 }



}
