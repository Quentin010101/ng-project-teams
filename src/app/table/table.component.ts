import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { State } from '../model/State';
import { Task } from '../model/Task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  states!: State[]
  tasks!: Task[]

  constructor(private _taskService: TaskService){}

  ngOnInit(){
    this.getStates()
    this.getTasks()
  }

  getTasks(){
    this._taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data
      }
    })
  }

  getStates(){
    this._taskService.getStates().subscribe({
      next: (data) => {
        this.states = data
      }
    })
  }
}
