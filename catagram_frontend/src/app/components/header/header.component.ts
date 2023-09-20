import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 768; // Change 768 to whatever mobile breakpoint you're using
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768; // Again, adjust 768 to your mobile breakpoint
    });
  }
}

