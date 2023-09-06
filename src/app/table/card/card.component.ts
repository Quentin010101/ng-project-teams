import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { State } from 'src/app/model/State';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task
  @Input() states!: State[]
  @Output() deleteTask = new EventEmitter() 
  showCardForm: boolean = false
  hover: boolean = false
  menuOpen: boolean = false
  bool!: boolean

  constructor(private _taskService: TaskService){}

  showForm(){
    if(!this.menuOpen)
    this.showCardForm = true
  }
  removeTask(){
    this.deleteTask.emit(this.task)
  }
  showMenu(e:Event){
    e.stopPropagation()
    if(!this.showCardForm)
    this.menuOpen = !this.menuOpen
  }
  closeMenu(){
    this.menuOpen = false
  }
  setCardFormVisibility(bool: boolean){
    this.showCardForm = bool
  }
  setDateEcheance(e:number){
    this.task.date_echeance = e
    this._taskService.updateTask(this.task).subscribe({
      next: (data) => {
        this.task = data
      }
    })
  }
  getOtherStates(): State[]{
    let arr: State[] = this.states.filter((state)=> {return this.task.state.state_id != state.state_id})
    return arr
  }
  moveTask(e:Event){
    const foundState = this.states.find((state)=> state.state_id === parseInt((e.target as HTMLInputElement).value))
    if(foundState != null && foundState.state_id != this.task.state.state_id){
      this.task.state = foundState
      this._taskService.updateTask(this.task).subscribe({
        next: (data) => {
          this.task = data
        }
      })
    }
  }
}
