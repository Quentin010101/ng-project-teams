import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { State } from 'src/app/model/State';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/service/task.service';
import { DialogComponent } from 'src/app/utils/dialog/dialog.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() state!: State
  @Input() tasks!: Task[]
  @Output() updateState = new EventEmitter() 
  hover: boolean = false
  hoverD: boolean = false


  tasksOfState: Task[] = []

  constructor(private _taskService: TaskService, private dialog: MatDialog){}

  ngOnInit(){
    this.tasks.forEach((task: Task) => {
      if(task.state.state_id == this.state.state_id) this.tasksOfState.push(task)
    })
  }

  updateTasks(state: State){
    this._taskService.getTasksByState(state).subscribe({
      next: (data)=> {
        this.tasksOfState = data
      }
    })
  }

  deleteTask(task: Task){
    this._taskService.removeTask(task).subscribe({
      next: (d) => {
        this._taskService.getTasksByState(this.state).subscribe({
          next: (data) => {
            this.tasksOfState = data
          }
        })
      }
    }
  )}
  deleteState(){
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { message: "Toutes les tâche associé seront supprimé!"}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result) {

        this._taskService.removeState(this.state).subscribe({
          next: (d) => this.updateState.emit()
        })
      } else {
        // User canceled the action.
        console.log('Canceled');
      }
    })
  }
}
