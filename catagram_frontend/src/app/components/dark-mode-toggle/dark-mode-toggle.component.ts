import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkModeService.isDarkMode$.subscribe(state => {
      this.isDarkMode = state;
    });

    this.isDarkMode = this.darkModeService.isDarkModeActive();

  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
