import { Component } from '@angular/core';
import diagramsData from '../../data/diagrams.json'
@Component({
  selector: 'app-merise',
  templateUrl: './merise.component.html',
  styleUrls: ['./merise.component.css']
})
export class MeriseComponent {
  meriseDiagrams: any = diagramsData[1].diagrams;
}
