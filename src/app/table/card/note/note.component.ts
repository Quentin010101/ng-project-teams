import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() y!: AbstractControl | null
  @Input() index!: number
  @Output() deleteNote = new EventEmitter<number>
  noteHover: boolean = false

  form!: FormGroup

  constructor(private formRoot: FormGroupDirective){}

  ngOnInit(){
    this.form = this.y as FormGroup
  }

  delete(){
    this.deleteNote.emit(this.index)
  }
}
