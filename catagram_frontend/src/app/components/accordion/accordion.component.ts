import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() diagrams: any[] = [];
  @Input() dataModelTitle: string = '';

  groupedDiagrams: { [key: string]: any[] } = {};

  public Object = Object

  // Group the different diagrams into arrays by types
  ngOnInit() {
    this.groupedDiagrams = this.diagrams.reduce((acc, diagram) => {
      if (!acc[diagram.type]) {
        acc[diagram.type] = [];
      }
      acc[diagram.type].push(diagram);
      return acc;
    }, {});
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
