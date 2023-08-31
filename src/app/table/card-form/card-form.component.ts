import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  @Input() task!: Task
  taskGroup!: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.createForm()
    this.fillForm()
    this.fillNotesArray()
    this.fillPersonsArray()
  }

  createForm(){
    this.taskGroup = this.fb.group({
      task_id: [''],
      title : [''],
      description : [''],
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
    const personsArray = this.taskGroup.get('persons') as FormArray
    for(let i = 0; i < this.task.persons.length; i++){    
      personsArray.push(new FormControl(this.task.persons[i]))
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
    const notesArray = this.taskGroup.get('notes')  as FormArray
    
    notesArray.push(new FormGroup({
      name: new FormControl((e.target as HTMLInputElement).value),
      bool: new FormControl(false)
    }))

     this.clearInput(e)
  }

  deleteNote(e: number){
    const notesArray = this.taskGroup.get('notes')  as FormArray
    notesArray.removeAt(e)
  }
  clearInput(e: Event){
    (e.target as HTMLInputElement).value =''
  }

  // Person
  removePerson(i: number){
    const personsArray = this.taskGroup.get('persons') as FormArray
    personsArray.removeAt(i)
  }
}
