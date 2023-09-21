import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() diagram: any;
  @Input() showModal?: boolean;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
