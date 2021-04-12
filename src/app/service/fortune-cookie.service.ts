import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FortuneCookieService {

  private baseUrl = "http://yerkee.com/api/fortune/";

  constructor(private httpClient: HttpClient) { }

  getFortune$ (category = ""): Observable<any> {

    return this.httpClient.get<any>(`${this.baseUrl}${category}`);
  }
}
