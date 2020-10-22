import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './countries.model';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  apiUrl="https://www.trackcorona.live/api/provinces";
  Al = "https://raw.githubusercontent.com/unitedstates/districts/gh-pages/states/AL/shape.geojson";
  constructor(private http: HttpClient) { }

  getLocation() {        
    return this.http.get<Countries>(this.apiUrl)
  }

  getAl() {        
    return this.http.get<Countries>(this.Al)
  }
}
