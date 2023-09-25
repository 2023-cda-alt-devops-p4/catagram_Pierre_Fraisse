import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./services/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'catagram_frontend';
  showNavigation = false;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigationService.navigationVisible$.subscribe(
      isVisible => this.showNavigation = isVisible
    );
  }
}
