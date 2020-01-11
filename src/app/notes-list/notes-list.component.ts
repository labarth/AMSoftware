import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit, DoCheck {
  notes: any;
  constructor(private notesService: NotesService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getNotes();
    this.notes = this.notesService.notes;
  }

  getNotes() {
    this.notesService.getNotes();
  }

  ngDoCheck(): void {
    this.notes = this.notesService.notes;
  }

}
