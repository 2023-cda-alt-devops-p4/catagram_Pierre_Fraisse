import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.css']
})
export class CardMiniComponent {
  @Input() diagram: any;
  @Output() openModalRequest = new EventEmitter<void>();

  triggerOpenModal() {
    this.openModalRequest.emit(this.diagram);
  }
}
