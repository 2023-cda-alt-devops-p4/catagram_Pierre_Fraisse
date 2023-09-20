import { Component } from '@angular/core';
import * as dataModels from '../../data/diagrams.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  dataModels: any = (dataModels as any).default;
}
