import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { State } from '../model/State';
import { Task } from '../model/Task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  states!: State[]
  tasks!: Task[]

  constructor(private _taskService: TaskService){}

  ngOnInit(){

    this.getFakeData()
    
    // this.getStates()
    // this.getTasks()
  }

  getTasks(){
    this._taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data
      }
    })
  }

  getStates(){
    this._taskService.getStates().subscribe({
      next: (data) => {
        this.states = data
      }
    })
  }

  updateState(){
    this.getStates()
  }

  getFakeData(){
    this.states = [
      {
        state_id: 1,
        name: "A Faire",
      },
      {
        state_id: 2,
        name: "En cours",
      },
      {
        state_id: 3,
        name: "Terminé",
      }
    ]
    this.tasks = [
      {
        task_id: 1,
        date_creation: 111112354,
        date_modification: 0,
        date_echeance: 1111111111111,
        title: 'title1',
        description: 'description description description description description  description description description description  description description description description  description description description description  description description description description',
        notes: [{
          note_id: 1,
          name: 'text',
          bool: false
        }],
        state: {
          state_id: 1,
          name: "A Faire",
        },
        person: {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'James',
          surname: 'Smith',
          email: ''
        },
        persons: [{
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'Kyle',
          surname: 'Moroe',
          email: ''
        },
        {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'Kyli',
          surname: 'Robert',
          email: ''
        },
        {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'More',
          surname: 'Pert',
          email: ''
        },],
        tags: []
      },
      {
        task_id: 1,
        date_creation: 111112354,
        date_modification: 0,
        date_echeance: 0,
        title: 'title1',
        description: 'description description description description description',
        notes: [{
          note_id: 3,
          name: 'text',
          bool: false
        }],
        state: {
          state_id: 2,
          name: "En cours",
        },
        person: {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'James',
          surname: 'Smith',
          email: ''
        },
        persons: [{
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'Albe',
          surname: 'Laure',
          email: ''
        },
        {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'Kyli',
          surname: 'Robert',
          email: ''
        },
        {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'Mike',
          surname: 'Slop',
          email: ''
        },],
        tags: []
      },
      {
        task_id: 1,
        date_creation: 1122251123154,
        date_modification: 0,
        date_echeance: 0,
        title: 'title1',
        description: 'description description description description description',
        notes: [{
          note_id: 3,
          name: 'text',
          bool: false
        }],
        state: {
          state_id: 2,
          name: "En cours",
        },
        person: {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'Mike',
          surname: 'Slop',
          email: ''
        },
        persons: [
        {
          person_id: 0,
          date_creation: 0,
          date_modification: 0,
          name: 'titi',
          surname: 'des',
          email: ''
        },],
        tags: []
      }
    ]
  }
}
