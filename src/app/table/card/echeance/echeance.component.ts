import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-echeance',
  templateUrl: './echeance.component.html',
  styleUrls: ['./echeance.component.css']
})
export class EcheanceComponent implements AfterViewInit {
  @Input() date_echeance: number = 0
  @Output() setDateEcheance = new EventEmitter<number>()
  
  addEcheance(e:Event){
    e.stopPropagation()
    let el = this.dateElement.nativeElement as HTMLInputElement
    el.showPicker()
  }

  @ViewChild('date') dateElement!: ElementRef;
  
  ngAfterViewInit(): void {
    this.dateElement.nativeElement.addEventListener('input', (e: Event) => {
      let d = new Date((e.target as HTMLInputElement).value)
      let t = d.getTime()
      if((e.target as HTMLInputElement).value == ''){
        t = 0
      }
      console.log(t)
      this.setDateEcheance.emit(t)
    })
  }
}


