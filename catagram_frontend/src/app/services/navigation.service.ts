import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationVisible = new BehaviorSubject<boolean>(false);
  navigationVisible$ = this.navigationVisible.asObservable();

  toggleNavigation() {
    this.navigationVisible.next(!this.navigationVisible.value);
  }
}
