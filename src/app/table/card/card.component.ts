import { Component, Input } from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task!: Task
}
