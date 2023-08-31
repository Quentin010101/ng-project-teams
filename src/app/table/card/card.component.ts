import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Person } from 'src/app/model/Person';
import { Task } from 'src/app/model/Task';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task
  taskGroup!: FormGroup
  addPerson!: Person[]
  personsTot!: Person[]

  constructor(private fb: FormBuilder, private _personService: PersonService){}

  ngOnInit(){
    this._personService.getPersons().subscribe({
      next: (data) => {
        console.log(data)
        this.personsTot = data
      }
    })
    this.createForm()
    this.fillForm()
    this.fillNotesArray()
    this.fillPersonsArray()
    this.initPersonAdd()
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

  initPersonAdd(){
    this.addPerson = this.task.persons
  }
}
