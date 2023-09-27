import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { Diagram } from "../../models/diagram";
import { AccordionService } from "../../services/accordion.service";
import { DiagramsService } from "../../services/diagrams.service";
import { ModalService } from "../../services/modal.service";
import { SearchService } from "../../services/search.service";

@Component({
  selector: 'app-diagram-page',
  templateUrl: './diagram-page.component.html',
  styleUrls: ['./diagram-page.component.css']
})
export class DiagramPageComponent implements OnInit, OnDestroy {
  dataModelTypes: string[] = [];
  dataModelType: string | null = null;
  diagramsByType: { [type: string]: Diagram[] } = {};
  showModal: boolean = false;
  activeDiagram: Diagram | null = null;
  displayedDiagramsByType: { [type: string]: Diagram[] } = {};
  allDiagramsForCurrentModel: Diagram[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
      private diagramsService: DiagramsService,
      private modalService: ModalService,
      private route: ActivatedRoute,
      private accordionService: AccordionService,
      private searchService: SearchService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dataModelType = data['modelType'];

      this.diagramsService.getDataModelTypes().subscribe(types => {
        this.dataModelTypes = types;
      });

      this.modalService.showModal$.subscribe(isOpen => {
        this.showModal = isOpen;
      });

      this.modalService.activeDiagram$.subscribe(diagram => {
        this.activeDiagram = diagram;
      });

      this.diagramsService.fetchDataModel().subscribe(dataModel => {
        const currentModel = dataModel.find(dm => dm.dataModel === this.dataModelType);
        if (currentModel) {
          this.allDiagramsForCurrentModel = currentModel.diagrams;
          this.diagramsByType = this.accordionService.groupDiagramsByType(currentModel.diagrams);
          this.displayedDiagramsByType = {...this.diagramsByType};
        }
      });
    });
  }

  openModal(diagram: any) {
    this.activeDiagram = diagram;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getTitle(modelType: 'uml' | 'merise' | null | string): string {
    return modelType === 'uml' ? 'Diagrammes UML' : 'Modèles MERISE';
  }

  getDisplayedDiagramTypes(): string[] {
    return Object.keys(this.displayedDiagramsByType);
  }

  handleSearch(query: string) {
    let filtered: Diagram[] = [];
    if (query.trim() === "") {
      this.displayedDiagramsByType = {...this.diagramsByType};
    } else {
      filtered = this.searchService.search(this.allDiagramsForCurrentModel, query);
      this.displayedDiagramsByType = this.accordionService.groupDiagramsByType(filtered);
    }
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
