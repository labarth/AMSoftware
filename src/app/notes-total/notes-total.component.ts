import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-total',
  templateUrl: './notes-total.component.html',
  styleUrls: ['./notes-total.component.scss']
})
export class NotesTotalComponent {
  boughtTotal = this.notesService.getBoughtTotal();
  needByuTotal = this.notesService.getNeedToBuyTotal();
  constructor(private notesService: NotesService ) { }
}
