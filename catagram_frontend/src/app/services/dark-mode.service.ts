// dark-mode.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private _isDarkMode = new BehaviorSubject<boolean>(this.getInitialDarkModeState());
  public isDarkMode$ = this._isDarkMode.asObservable();
  isDarkModeActive(): boolean {
    return this._isDarkMode.value;
  }

  constructor() { }

  private getInitialDarkModeState(): boolean {
    const darkModeFromStorage = localStorage.getItem('darkMode');
    return darkModeFromStorage === 'true';
  }

  toggleDarkMode() {
    const nextMode = !this._isDarkMode.value;
    this._isDarkMode.next(nextMode);
    localStorage.setItem('darkMode', nextMode ? 'active' : 'inactive');
  }

  initializeDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === 'active' ? true : false;
    this._isDarkMode.next(isDarkMode);
  }

}
