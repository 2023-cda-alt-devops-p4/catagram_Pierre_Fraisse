import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'catagram_frontend';
  showNavigation = false;
  isMobile: boolean = window.innerWidth < 768;

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      if (this.isMobile) {
        this.showNavigation = false;
      }
    });
  }

  toggleNavigationStatus(status: boolean) {
    this.showNavigation = status;
  }
}
