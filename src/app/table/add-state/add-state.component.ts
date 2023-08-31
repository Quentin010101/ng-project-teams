import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { State } from 'src/app/model/State';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent {
  form!: FormGroup

  constructor(private _taskService: TaskService){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl()
    })
  }

  add(){
    if(!this.form.invalid){
      let state: State = new State()
      state = this.form.value
      this._taskService.addState(state)
    }
  }
}
