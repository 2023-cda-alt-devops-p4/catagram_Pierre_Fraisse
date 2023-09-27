import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuStateSubject = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuStateSubject.asObservable();

  toggleMenu() {
    const currentState = this.menuStateSubject.getValue();
    this.menuStateSubject.next(!currentState);
  }

  closeMenu() {
    this.menuStateSubject.next(false);
  }

  openMenu() {
    this.menuStateSubject.next(true);
  }
}
