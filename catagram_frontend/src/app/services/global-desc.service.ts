import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalDesc} from "../models/global-desc";

@Injectable({
  providedIn: 'root'
})
export class GlobalDescService {
  private dataUrl = 'assets/data/global-desc.json';

  constructor(private http: HttpClient) {  }

  fetchGlobalDescription(): Observable<GlobalDesc[]> {
    return this.http.get<GlobalDesc[]>(this.dataUrl);
  }
}
