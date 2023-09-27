import {Component, Input, OnInit} from '@angular/core';
import {Diagram} from "../../models/diagram";
import {AccordionService} from "../../services/accordion.service";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() diagrams: Diagram[] = [];
  @Input() dataModelTitle: string = '';
  groupedDiagrams: { [key: string]: Diagram[] } = {};
  public Object = Object;

  constructor(private accordionService: AccordionService) { }
  // Group the different diagrams into arrays by types
  ngOnInit() {
    this.groupedDiagrams = this.accordionService.groupDiagramsByType(this.diagrams);
  }

  // Handles the opening/closing of the accordion component
  isExpanded: { [key: string]: boolean } = {};
  // Set the initial accordion-header div to not expanded
  accordionHeaderExpanded = false;

  toggleAccordion(type?: string): void {
    if (!type) { // if main title was clicked
      this.accordionHeaderExpanded = !this.accordionHeaderExpanded;
      if (!this.accordionHeaderExpanded) {
        // When main title collapses, collapse all type accordions too
        for (let key of Object.keys(this.isExpanded)) {
          this.isExpanded[key] = false;
        }
      }
    } else {
      // Toggle individual type accordion
      this.isExpanded[type] = !this.isExpanded[type];
    }
  }

}
