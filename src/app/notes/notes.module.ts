import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { NotesTotalComponent } from './notes-total/notes-total.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    NotesListComponent,
    NotesFormComponent,
    NotesTotalComponent,
  ],

  exports: [
    NotesListComponent,
    NotesFormComponent,
    NotesTotalComponent,
  ]
})
export class NotesModule { }
