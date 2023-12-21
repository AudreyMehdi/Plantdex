import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {  Pre } from '../models/image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  
  getImage():Observable<Pre[]>{
    return this.http.get<Pre[]>("http://localhost:3002/image");
  }
}