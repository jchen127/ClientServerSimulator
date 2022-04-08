import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2, RendererStyleFlags2} from "@angular/core";

@Directive({
  selector: '[appToggleAnotherStaff]'
})
export class ToggleAnotherStaffDirective implements OnInit{
  ngOnInit(): void {
  }

  constructor(private render: Renderer2, private elem: ElementRef) {
  }

  @Input() displayOption: boolean = false;

  @HostListener('click')
  displayOnClick(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none', RendererStyleFlags2.Important);

    console.log(`Another bite the dust... ${this.displayOption}`);

    if(this.displayOption == false){

      this.render.removeClass(this.elem.nativeElement.firstElementChild, 'd-none');
      this.render.setStyle(this.elem.nativeElement.firstElementChild, 'display', 'none', RendererStyleFlags2.Important);
    }else{
      this.render.removeStyle(this.elem.nativeElement.firstElementChild, 'display');
      //this.render.addClass(this.elem.nativeElement.firstElementChild, 'd-none');
      //this.render.setStyle(this.elem.nativeElement.firstElementChild, 'display', 'block', RendererStyleFlags2.Important);
    }


  }


}
