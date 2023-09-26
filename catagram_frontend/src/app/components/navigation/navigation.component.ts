import {Component, OnInit} from '@angular/core';
import * as dataModels from '../../../assets/data/diagrams.json';
import {DataModel} from "../../models/data-model";
import {DiagramsService} from "../../services/diagrams.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dataModels: DataModel[] = [];

  constructor(private diagramsService: DiagramsService) {}

  ngOnInit(): void {
    this.diagramsService.fetchDataModel().subscribe(dataModel => {
      this.dataModels = dataModel;
    })
  }
}
