import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/Game';

@Injectable({
  providedIn: 'root',
})
export class GamesServiceService {
  private http = inject(HttpClient);
  baseUrl = 'https://www.freetogame.com/api';

  constructor() {}

  getGames():Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/games');
  }
} 
