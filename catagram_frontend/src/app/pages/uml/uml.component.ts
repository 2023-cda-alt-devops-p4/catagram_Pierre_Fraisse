import {Component, OnDestroy, OnInit} from '@angular/core';
import {Diagram} from "../../models/diagram";
import {DataModel} from "../../models/data-model";
import {DiagramsService} from "../../services/diagrams.service";
import {Subscription} from "rxjs";
import {ModalService} from "../../services/modal.service";
@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html',
  styleUrls: ['./uml.component.css']
})
export class UmlComponent implements OnInit, OnDestroy {
  dataModels: DataModel[] = [];
  umlDiagrams: Diagram[] =[];
  showModal: boolean = false;
  activeDiagram: Diagram | null = null;

  private subscription: Subscription = new Subscription();
  constructor(private diagramsService: DiagramsService,
              private modalService: ModalService
  ) {}
  ngOnInit() {
    this.modalService.showModal$.subscribe(isOpen => {
      this.showModal = isOpen;
    })

    this.modalService.activeDiagram$.subscribe(diagram => {
      this.activeDiagram = diagram;
    })

    this.diagramsService.fetchDataModel().subscribe(dataModel => {
      this.dataModels = dataModel;
      this.umlDiagrams = this.dataModels.find(dm => dm.dataModel === 'uml')?.diagrams || [];
    })
  }

  openModal(diagram: any) {
    this.activeDiagram = diagram;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
