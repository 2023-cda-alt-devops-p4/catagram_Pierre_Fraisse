import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Diagram} from "../models/diagram";
import {DataModel} from "../models/data-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiagramsService {
  private dataUrl = 'assets/data/diagrams.json';

  constructor(private http: HttpClient) {}

  fetchDataModel(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.dataUrl);
  }
}
