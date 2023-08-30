import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-flex',
  templateUrl: './container-flex.component.html',
  styleUrls: ['./container-flex.component.css']
})
export class ContainerFlexComponent {
@Input() gap: number = 0
}
