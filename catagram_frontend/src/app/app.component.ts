import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DarkModeService} from "./services/dark-mode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'catagram_frontend';
  showNavigation = false;
  isMobile: boolean = window.innerWidth < 768;
  private darkModeSub!: Subscription;

constructor(private darkModeService: DarkModeService) {
}
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      if (this.isMobile) {
        this.showNavigation = false;
      }
    });

    this.darkModeSub = this.darkModeService.isDarkMode$.subscribe(isDark => {
      if (isDark) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    });
    this.darkModeService.initializeDarkMode();
  }

  toggleNavigationStatus(status: boolean) {
    this.showNavigation = status;
  }

  ngOnDestroy(): void {
    if (this.darkModeSub) {
      this.darkModeSub.unsubscribe();
    }
  }

}
