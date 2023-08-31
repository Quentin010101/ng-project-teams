import { Component, Input } from '@angular/core';
import { State } from 'src/app/model/State';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() state!: State
  @Input() tasks!: Task[]

  tasksOfState: Task[] = []

  ngOnChanges(){
    this.tasks.forEach((task: Task) => {
      if(task.state.state_id == this.state.state_id) this.tasksOfState.push(task)
    })
  }

  addTask(){
    this.tasksOfState.push(new Task())
  }
}
