import { Component, Input, OnInit } from '@angular/core';
import { GlobalDesc} from "../../models/global-desc";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() description!: GlobalDesc;

  ngOnInit(): void {
  }

}
