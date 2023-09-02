import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/model/State';
import { TaskService } from 'src/app/service/task.service';

@Component({
  host: {
    '(document:click)': 'close($event)',
  },
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent {
  @Output() updateState = new EventEmitter()
  form!: FormGroup
  newState: boolean = false
  hover: boolean = false

  constructor(private _taskService: TaskService, private _eref: ElementRef){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }
  addOnEnter(e: KeyboardEvent){
    if(e.key == 'Enter'){
      this.add()
    }
  }
  add(){
    if(!this.form.invalid){
      this._taskService.addState(this.getFromValue()).subscribe({
        next: (d) => this.updateState.emit()
      })
      this.resetComponent()
    }
  }
  getFromValue(): State{
    let state: State = new State()
    state = this.form.value
    return state
  }
  resetComponent(){
    this.form.reset()
    this.newState = false
  }
  close(e: Event) {
    if(!this._eref.nativeElement.contains(e.target) && this.newState == true) {
      this.resetComponent()
    }
  }
  showForm(){
    this.newState = !this.newState
  }
}
