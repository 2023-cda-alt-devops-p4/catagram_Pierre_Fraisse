import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Diagram} from "../models/diagram";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSubject.asObservable();

  private activeDiagramSubject = new BehaviorSubject<Diagram | null>(null);
  activeDiagram$ = this.activeDiagramSubject.asObservable();

  openModal(diagram: Diagram) {
    this.activeDiagramSubject.next(diagram);
    this.showModalSubject.next(true);
  }

  closeModal() {
    this.showModalSubject.next(false);
  }


  constructor() { }
}
