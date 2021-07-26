import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements OnInit {
  // TODO create library
  defaultImage = 'https://img.icons8.com/pastel-glyph/2x/person-male--v2.png'

  @HostListener('error') handleError(e) {
    if (e === undefined) {
      this.elementRef.nativeElement.src = this.defaultImage
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (!this.elementRef.nativeElement.src.trim()) {
      this.elementRef.nativeElement.src = this.defaultImage
    }
  }
}
