import {
  Component,
  ComponentRef,
  Directive,
  ElementRef, EventEmitter,
  HostListener, Input,
  OnInit, Output,
  Renderer2,
  RendererStyleFlags2
} from "@angular/core";


@Directive({
  selector: '[appBetterToggleStaff]'
})
export class BetterToggleStaff implements OnInit{

  @Input() someStuffFromBetter:boolean = false;

  @Output() betterDirectiveEmitter = new EventEmitter<string>();
  EmitMyBetter(): void{
    this.betterDirectiveEmitter.emit("Emitting grumbles");
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }

  ngOnInit(){

   //this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none', RendererStyleFlags2.Important);

  }

  @HostListener('mouseenter')
  AnotherBraveHero(){

    console.log(`Fumbling for more grumbling SomeStuffFromBetter is from shit to ${this.someStuffFromBetter}`);

  }


}
