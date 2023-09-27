import {Component, EventEmitter, Output} from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
  @Output() menuToggle = new EventEmitter<boolean>();
  isOpen = false;

  constructor(private menuService: MenuService) {
    this.menuService.menuState$.subscribe(state => {
      this.isOpen = state;
      this.menuToggle.emit(this.isOpen);
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
