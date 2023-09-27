import { Injectable } from '@angular/core';
import {Diagram} from "../models/diagram";

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  groupDiagramsByType(diagrams: Diagram[]): { [key: string]: Diagram[] } {
    return diagrams.reduce((acc: { [type: string]: Diagram[] }, diagram: Diagram) => {
      if (!acc[diagram.type]) {
        acc[diagram.type] = [];
      }
      acc[diagram.type].push(diagram);
      return acc;
    }, {});
  }
}

