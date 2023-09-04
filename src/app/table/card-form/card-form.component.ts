import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/model/Person';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnChanges{
  @Output() visibility = new EventEmitter()
  @Input() task!: Task
  @Input() visible: boolean = false
  taskGroup!: FormGroup
  appear: boolean = false
  hoverAddPerson: boolean = false
  addPersonVisible: boolean = false
  personsArray!: FormArray

  constructor(private fb: FormBuilder, private _taskService: TaskService){}

  ngOnInit(){
    this.createForm()
    this.fillForm()
    this.fillNotesArray()
    this.fillPersonsArray()
    this.personsArray.valueChanges.subscribe({
      next: (d) => {
        this.save()
      } 
    })
    this.taskGroup.get('date_echeance')?.valueChanges.subscribe({
      next: (d) => {
        this.save()
      } 
    })
  }
  ngOnChanges(changes: any){

      if(changes.task && !changes['task'].firstChange) this.fillForm()


  }


  createForm(){
    this.taskGroup = this.fb.group({
      task_id: [''],
      date_echeance: [''],
      title : ['', Validators.required],
      description : [''],
      state: [''],
      notes: this.fb.array([]),
      persons: this.fb.array([])
    })
  }

  fillForm(){
    this.taskGroup.patchValue(this.task)
  }

  fillNotesArray(){
    const notesArray = this.taskGroup.get('notes')  as FormArray
    for(let i = 0; i < this.task.notes.length; i++){    
      notesArray.push(
        new FormGroup({
         name: new FormControl(this.task.notes[i].name),
         bool: new FormControl(this.task.notes[i].bool)
        })
      )
    }
  }
  fillPersonsArray(){
    this.personsArray = this.taskGroup.get('persons') as FormArray
    for(let i = 0; i < this.task.persons.length; i++){    
      this.personsArray.push(new FormControl(this.task.persons[i]))
    }
  }

  get notes() {
    return this.taskGroup.controls["notes"] as FormArray;
  }
  get persons() {
    return this.taskGroup.controls["persons"] as FormArray;
  }

  //Notes
  addNotes(e: Event){
    if((e.target as HTMLInputElement).value != ''){
      const notesArray = this.taskGroup.get('notes')  as FormArray
      
      notesArray.push(new FormGroup({
        name: new FormControl((e.target as HTMLInputElement).value),
        bool: new FormControl(false)
      }))
  
       this.clearInput(e)
    }
  }

  deleteNote(e: number){
    const notesArray = this.taskGroup.get('notes')  as FormArray
    notesArray.removeAt(e)
  }
  clearInput(e: Event){
    (e.target as HTMLInputElement).value =''
  }

  // Person
  
  test(){
    if(!this.appear){
      this.appear = true
    }else{
      this.visibility.emit(false)
      this.appear = false
    }
  }
  
  save(){
    if(!this.taskGroup.invalid){
      this.taskGroup.updateValueAndValidity()
      this._taskService.updateTask(this.taskGroup.value).subscribe({
        next: (data) => this.task = data
      })
    }
  }
  removePerson(i: number, event: Event){
    event.stopPropagation()
    this.personsArray.removeAt(i)
  }
  addToPersons(p: Person){
    this.addPersonVisible = false
    this.personsArray.push(new FormControl(p))
  }

  showAddPerson(event: Event){
    event.stopPropagation();
    this.addPersonVisible = true
  }
  closeAddperson(){
    if(this.addPersonVisible){
      this.addPersonVisible = false
    }
  }
  setDateEcheance(e:number){
    this.taskGroup.get('date_echeance')?.setValue(e)
  }
}
