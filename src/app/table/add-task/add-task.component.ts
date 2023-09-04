import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/model/State';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  host: {
    '(document:click)': 'close($event)',
  },
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() state!: State
  @Output() reinitTasks = new EventEmitter()
  hover: boolean = false
  newTask: boolean = false
  form!: FormGroup

  constructor(private _taskService: TaskService, private _eref: ElementRef){}

  ngOnInit(){
    this.form = new FormGroup({
      title : new FormControl( '', [Validators.required, Validators.maxLength(30)])
    })
  }
  
  addNewTask(){
    this.newTask = true
  }
  onSubmit(){
    let t = new Task()
    let d = new Date()
    t.title = this.form.get('title')?.value
    t.state = this.state
    t.date_creation = d.getTime()
    this._taskService.addTask(t).subscribe({
      next: () => this.reinit()
    })
    this.resetForm()
  }
  resetForm(){
    this.form.reset()
    this.newTask = false
  }
  reinit(){
    this.reinitTasks.emit(this.state)
  }

  close(e: Event) {
    if(!this._eref.nativeElement.contains(e.target) && this.newTask == true) {
      this.resetForm()
    }
  }
}
