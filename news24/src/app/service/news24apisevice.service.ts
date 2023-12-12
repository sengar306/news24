import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News24apiseviceService {

  constructor(private _http:HttpClient) {
    
    newapi="https://newsapi.org/v2/top-headlines?country=us&apiKey=37c4a76f73a24742b163ecf3a81c4cf8";
    
     topheading():Observable<any>
    {
      return this._http.get(this.newapi);
    }
   }
}
