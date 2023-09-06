import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ColumnComponent } from './table/column/column.component';
import { CardComponent } from './table/card/card.component';
import { HttpErrorService } from './interceptor/http-error.service';
import { LetterComponent } from './utils/letter/letter.component';
import { DatePipe } from './pipe/date.pipe';
import { DeleteComponent } from './utils/delete/delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ContainerFlexComponent } from './utils/container-flex/container-flex.component';
import { AddComponent } from './utils/add/add.component';
import { NoteComponent } from './table/card/note/note.component';
import { CardFormComponent } from './table/card-form/card-form.component';
import { AddStateComponent } from './table/add-state/add-state.component';
import { RemoveStateComponent } from './table/remove-state/remove-state.component';
import { AddTaskComponent } from './table/add-task/add-task.component';
import { CloseElementOnClickOutsideDirective } from './directive/close-element-on-click-outside.directive';
import { DialogComponent } from './utils/dialog/dialog.component';
import { AddPersonComponent } from './table/card/add-person/add-person.component';
import { HoverContainerComponent } from './utils/hover-container/hover-container.component';
import { EcheanceComponent } from './table/card/echeance/echeance.component';
import { DragableContainerComponent } from './utils/dragable-container/dragable-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CloseElementOnClickOutsideDirective,
    TableComponent,
    ColumnComponent,
    CardComponent,
    DatePipe,
    DeleteComponent,
    ContainerFlexComponent,
    AddComponent,
    NoteComponent,
    CardFormComponent,
    AddStateComponent,
    RemoveStateComponent,
    AddTaskComponent,
    DialogComponent,
    LetterComponent,
    AddPersonComponent,
    HoverContainerComponent,
    EcheanceComponent,
    DragableContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
