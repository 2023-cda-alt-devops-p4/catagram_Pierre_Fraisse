import { Component, OnInit } from '@angular/core';
import * as globalDesc from 'src/app/data/global-desc.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  globalDescriptions: any = (globalDesc as any).default;

  ngOnInit(): void {}
}
