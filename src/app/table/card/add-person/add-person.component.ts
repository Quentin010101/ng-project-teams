import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnChanges{
  @Output() addToPersons = new EventEmitter<Person>
  @Input() addPerson!: Person[]
  personsTot!: Person[]
  personToAdd: Person[] = []
  actif: boolean = false
  hover: boolean = false

  constructor(private _personService: PersonService){}
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['addPerson'].firstChange){
      this.personToAdd = []
      this.personsToAdd()
    }
  }

  ngOnInit(){
    this.getPersonsTot()
  }

  personsToAdd(){
    this.personsTot.forEach((p) => {
      let i = true
      this.addPerson.forEach((p2)=> {
        if(p.person_id == p2.person_id) i = false
      })
      if(i) this.personToAdd.push(p)
    })
    this.actif = true
  }

  getPersonsTot(){
    this._personService.getPersons().subscribe({
        next: (data) => {
          this.personsTot = data
          this.personsToAdd()
        }
    })
  }

  addSpecificPerson(p: Person, event :Event){
    event.stopPropagation();
    this.addToPersons.emit(p)
  }
}
