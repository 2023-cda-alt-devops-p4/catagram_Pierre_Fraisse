import { Injectable } from '@angular/core';
import { Diagram } from '../models/diagram';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search(diagrams: Diagram[], query: string): Diagram[] {
    console.log("service diagrams: ", diagrams)
    return diagrams.filter(diagram =>
        diagram.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
