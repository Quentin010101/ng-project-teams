import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from 'src/env';
import { Task } from '../model/Task';
import { State } from '../model/State';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = environnement.backEndUrl

  constructor(private _httpClient: HttpClient) { }

  public getTasks(): Observable<Task[]>{
    return this._httpClient.get<Task[]>(this.url + '/task', { headers: this.headers() })
  }

  public getTasksByState(): Observable<Task[]>{
    return this._httpClient.get<Task[]>(this.url + '/task/state', { headers: this.headers() })
  }

  public getStates(): Observable<State[]> {
    return this._httpClient.get<State[]>(this.url + "/state",  { headers: this.headers() })
  }

  public addState(state: State) {
    return this._httpClient.post(this.url + "/state/add", state, { headers: this.headers() })
  }
  public addTask(task: Task){
    return this._httpClient.post(this.url + "/task/add", task, { headers: this.headers() })
  }

  private headers(){
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }
}
