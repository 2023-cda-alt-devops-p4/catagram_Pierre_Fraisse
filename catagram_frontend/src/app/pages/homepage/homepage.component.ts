import { Component, OnInit } from '@angular/core';
import {GlobalDesc} from "../../models/global-desc";
import {GlobalDescService} from "../../services/global-desc.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  globalDescriptions: GlobalDesc[] = [];

  constructor(private globalDescService: GlobalDescService) {}

  ngOnInit(): void {
    this.globalDescService.fetchGlobalDescription().subscribe(desc => {
      this.globalDescriptions = desc;
    })
  }
}
