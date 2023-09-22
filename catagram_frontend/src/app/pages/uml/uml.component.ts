import { Component } from '@angular/core';
import diagramsData from '../../data/diagrams.json'
@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html',
  styleUrls: ['./uml.component.css']
})
export class UmlComponent {
  umlDiagrams: any = diagramsData[0].diagrams;
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
