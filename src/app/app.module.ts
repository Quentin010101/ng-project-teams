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
import { ContainerFlexComponent } from './utils/container-flex/container-flex.component';
import { AddComponent } from './utils/add/add.component';
import { NoteComponent } from './table/card/note/note.component';
import { CardFormComponent } from './table/card-form/card-form.component';
import { AddStateComponent } from './table/add-state/add-state.component';
import { RemoveStateComponent } from './table/remove-state/remove-state.component';
import { AddTaskComponent } from './table/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColumnComponent,
    CardComponent,
    LetterComponent,
    DatePipe,
    DeleteComponent,
    ContainerFlexComponent,
    AddComponent,
    NoteComponent,
    CardFormComponent,
    AddStateComponent,
    RemoveStateComponent,
    AddTaskComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
