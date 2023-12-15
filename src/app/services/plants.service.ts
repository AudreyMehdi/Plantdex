import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {// correspond à la méthode fetch
    return this.http.get<Plant[]>("http://localhost:3000/plants");
}
}