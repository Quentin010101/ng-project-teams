import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  host:{
    '(document:click)' : 'close($event)'
  },
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

  constructor(private _eltRef: ElementRef){}

  showForm(){
    this.showCardForm = true
  }

  removeTask(){
    this.deleteTask.emit(this.task)
  }
  showMenu(){
    this.menuOpen = true
  }
  close(e: Event){
    if(!this._eltRef.nativeElement.contains(e.target) && this.menuOpen == true){
      this.menuOpen = false
    }
  }
}
