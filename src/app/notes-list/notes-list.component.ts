import { Component } from '@angular/core';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  notes = this.notesService.notes;
  constructor(private notesService: NotesService) { }

}
