import { Component, Input } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {
  @Input() person: Person = new Person()
  letter1: string = ''
  letter2: string = ''


  ngOnInit(){
    if(this.person != null) {
      this.letter1 = this.person.surname.substring(0,1)
      this.letter2 = this.person.name.substring(0,1)
    }

  }

  makeColor(a: string, b: string){
    let tot = (a.charCodeAt(0) + b.charCodeAt(0))*(360/52)
    return 'hsl(' + tot + ', 70%, 60%)'
  }

}
