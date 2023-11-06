import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false

  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen
  }
  @HostListener('mouseleave') close() {  
    this.isOpen = false
  }
}
