import {Component, OnInit} from '@angular/core';
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;

  constructor(private navigationService: NavigationService) {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768; // Again, adjust 768 to your mobile breakpoint
    });
  }

  toggleNavigation() {
    this.navigationService.toggleNavigation();
  }
}

