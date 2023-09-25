import { Component, Input, OnInit } from '@angular/core';

interface GlobalDescription {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() description!: GlobalDescription;

  ngOnInit(): void {
  }

}
