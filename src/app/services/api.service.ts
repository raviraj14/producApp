import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

  getProduct() : Observable<any>{
    let apiURL = "https://fakestoreapi.com/products";
    return this.http.get<any>(apiURL)
    .pipe(map((res : any)=>{
      return res;
    }))
  }
}
