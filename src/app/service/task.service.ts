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

  public getTasksByState(state: State): Observable<Task[]>{
    return this._httpClient.post<Task[]>(this.url + '/task/state',state, { headers: this.headers() })
  }

  public getStates(): Observable<State[]> {
    return this._httpClient.get<State[]>(this.url + "/state",  { headers: this.headers() })
  }

  public addState(state: State) {
    return this._httpClient.post(this.url + "/state/add", state, { headers: this.headers() })
  }
  public addTask(task: Task){
    return this._httpClient.post(this.url + "/task/create", task, { headers: this.headers() })
  }

  public removeTask(task: Task){
    return this._httpClient.delete(this.url + "/task/delete/"+ task.task_id, { headers: this.headers() })
  }
  public removeState(state: State){
    return this._httpClient.delete(this.url + "/state/delete/"+ state.state_id, { headers: this.headers() })
  }
  public updateTask(task: Task): Observable<Task>{
    return this._httpClient.put<Task>(this.url + "/task/update/"+ task.task_id, task, { headers: this.headers() })
  }


  private headers(){
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }
}
