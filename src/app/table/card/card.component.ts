import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/model/Task';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task

  showCardForm(){

  }

}
