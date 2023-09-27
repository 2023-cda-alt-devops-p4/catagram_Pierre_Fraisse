import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScreenDetectionService {
  private screenWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth);
  isMobile(): boolean {
    return window.innerWidth < 769;
  }

  setScreenWidth(width: number): void {
    this.screenWidthSubject.next(width);
  }

  constructor() { }
}
