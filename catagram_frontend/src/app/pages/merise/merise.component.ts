import {Component, OnDestroy, OnInit} from '@angular/core';
import { Diagram } from "../../models/diagram";
import { DataModel } from "../../models/data-model";
import {DiagramsService} from "../../services/diagrams.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-merise',
  templateUrl: './merise.component.html',
  styleUrls: ['./merise.component.css']
})
export class MeriseComponent implements OnInit, OnDestroy {
  dataModels: DataModel[] = [];
  meriseDiagrams: Diagram[] = [];
  showModal: boolean = false;
  activeDiagram?: Diagram;

  private subscription: Subscription = new Subscription();
  constructor(private diagramsService: DiagramsService) {}
  ngOnInit() {
    this.diagramsService.fetchDataModel().subscribe(dataModel => {
      this.dataModels = dataModel;
      this.meriseDiagrams = this.dataModels.find(dm => dm.dataModel === 'merise')?.diagrams || [];
    });
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
