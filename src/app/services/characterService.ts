import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Character} from '../models/character';
import {map, Observable} from 'rxjs';

interface CharacterApiResponse {
  items: Character[];
}

@Injectable({
  providedIn: 'root',
})

export class CharacterService {

  constructor(private http: HttpClient) {}

  private readonly baseUrl: string = 'https://dragonball-api.com/api';

  public getAllCharacters(): Observable<Character[]> {
    return this.http.get<any>(`${this.baseUrl}/characters`)
      .pipe(map((response) => response.items));
  }

}
