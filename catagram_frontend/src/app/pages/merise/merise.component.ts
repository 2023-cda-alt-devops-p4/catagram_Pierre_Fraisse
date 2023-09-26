import { Component } from '@angular/core';
import diagramsData from '../../../assets/data/diagrams.json'
@Component({
  selector: 'app-merise',
  templateUrl: './merise.component.html',
  styleUrls: ['./merise.component.css']
})
export class MeriseComponent {
  meriseDiagrams: any = diagramsData[1].diagrams;
  showModal: boolean = false;
  activeDiagram: any;

  openModal(diagram: any) {
    this.activeDiagram = diagram;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
