import { Component, Input } from '@angular/core';
import { State } from 'src/app/model/State';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() state!: State
  @Input() tasks!: Task[]

  tasksOfState: Task[] = []

  constructor(private _taskService: TaskService){}

  ngOnInit(){
    this.tasks.forEach((task: Task) => {
      if(task.state.state_id == this.state.state_id) this.tasksOfState.push(task)
    })
  }

  updateTasks(){
    console.log("r")
    this._taskService.getTasksByState().subscribe({
      next: (data)=> {
        this.tasksOfState = data
      }
    })
  }
}
