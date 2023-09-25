import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
