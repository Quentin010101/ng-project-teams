import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from 'src/env';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url = environnement.backEndUrl

  constructor(private _httpClient: HttpClient) { }

  public getPersons() : Observable<Person[]>{
    return this._httpClient.get<Person[]>(this.url + '/person', { headers: this.headers()})
  }

  private headers(){
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }
}
