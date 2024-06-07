import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private authorjsonUrl = './resources/authors.json'
  private newsjsonUrl = './resources/news.json'
  constructor(private http: HttpClient) {
   }
  getAuthors(): Observable<any[]>{
    return this.http.get<any[]>(this.authorjsonUrl)
  }
  getNews(): Observable<any[]>{
    return this.http.get<any[]>(this.newsjsonUrl)
  }
}
