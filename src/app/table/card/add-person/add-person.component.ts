import { Component, Input } from '@angular/core';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  @Input() addPerson!: Person[]
  @Input() personsTot!: Person[]
  personToAdd: Person[] = []

  ngOnInit(){
    console.log("component")
    this.personsToAdd()
  }

  personsToAdd(){
    this.personsTot.forEach((p) => {
      let i = true
      this.addPerson.forEach((p2)=> {
        if(p.person_id == p2.person_id) i = false
      })
      if(i) this.personToAdd.push(p)
    })
  }
}
