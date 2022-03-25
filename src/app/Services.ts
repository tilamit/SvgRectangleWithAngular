import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shape } from './shape';

@Injectable({
  providedIn: 'root'
})
export class UpdateService  {

  url: string = "";

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:55615/api/values/';
  }

  updateValues(aShape: Shape) {
    var a = this.url + 'UpdateValue';
    console.log(aShape);

    return this.http.post<any>(a, aShape); 
  }

  getValues() {
    var a = this.url + 'GetValues';

    return this.http.get<any>(a);
  }
}