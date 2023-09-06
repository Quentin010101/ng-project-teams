import { AfterViewInit, Component, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dragable-container',
  templateUrl: './dragable-container.component.html',
  styleUrls: ['./dragable-container.component.css']
})
export class DragableContainerComponent implements AfterViewInit{
  @Input() taskId!: number

  @ViewChild('dragable') dragable!: ElementRef
  ngAfterViewInit(){
    this.dragable.nativeElement.addEventListener('dragstart', (e:HTMLElement)=> {

    })
  }
}
