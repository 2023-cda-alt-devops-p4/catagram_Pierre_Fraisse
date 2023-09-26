import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;

  @Output() menuStatus = new EventEmitter<boolean>();
  constructor() {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }
  handleMenuToggle(event: boolean) {
    this.menuStatus.emit(event);
  }
}

