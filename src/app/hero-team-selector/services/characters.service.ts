import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  fetchHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:8080/hero');
  }

  fetchWicked(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:8080/wicked');
  }
}
