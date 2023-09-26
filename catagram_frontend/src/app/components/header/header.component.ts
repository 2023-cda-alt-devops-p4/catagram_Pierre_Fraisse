import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DiagramsService} from "../../services/diagrams.service";
import {DataModel} from "../../models/data-model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;
  @Output() menuStatus = new EventEmitter<boolean>();
  dataModels: DataModel[] = [];
  constructor(private diagramsService: DiagramsService) {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.diagramsService.fetchDataModel().subscribe(dataModel => {
      this.dataModels = dataModel;
    });

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }
  handleMenuToggle(event: boolean) {
    this.menuStatus.emit(event);
  }
}

