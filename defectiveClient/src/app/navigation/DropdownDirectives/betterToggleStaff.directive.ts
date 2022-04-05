import {Component, ComponentRef, Directive, ElementRef, OnInit, Renderer2, RendererStyleFlags2} from "@angular/core";

@Directive({
  selector: '[appBetterToggleStaff]'
})
export class BetterToggleStaff implements OnInit{



  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }

  ngOnInit(){

    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none', RendererStyleFlags2.Important);

  }

}
