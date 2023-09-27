import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {DiagramsService} from "../../services/diagrams.service";
import {DataModel} from "../../models/data-model";
import {ScreenDetectionService} from "../../services/screen-detection.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;
  @Output() menuStatus = new EventEmitter<boolean>();
  dataModels: DataModel[] = [];
  constructor(private diagramsService: DiagramsService,
              private screenDetectionService: ScreenDetectionService
  ) {
    this.isMobile = screenDetectionService.isMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.screenDetectionService.setScreenWidth((event.target as Element).clientWidth);
    this.isMobile = this.screenDetectionService.isMobile();
  }

  ngOnInit(): void {
    this.diagramsService.fetchDataModel().subscribe(dataModel => {
      this.dataModels = dataModel;
    });



  }
  handleMenuToggle(isMenuOpen: boolean) {
    this.menuStatus.emit(isMenuOpen);
  }
}

