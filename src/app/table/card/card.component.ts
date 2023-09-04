import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task
  @Output() deleteTask = new EventEmitter() 
  showCardForm: boolean = false
  hover: boolean = false
  menuOpen: boolean = false
  bool!: boolean

  constructor(private _eltRef: ElementRef){}

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
  
}
