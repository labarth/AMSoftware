import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { NotesTotalComponent } from './notes-total/notes-total.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [
    NotesRoutingModule,
    SharedModule,
    BrowserModule,
  ],
  declarations: [
    NotesListComponent,
    NotesFormComponent,
    NotesTotalComponent,
    NotesPageComponent,
  ],

  exports: [
    NotesPageComponent,
  ]
})
export class NotesModule { }
