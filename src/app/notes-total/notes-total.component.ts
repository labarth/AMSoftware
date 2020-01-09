import { Component, OnInit, DoCheck } from '@angular/core';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-notes-total',
  templateUrl: './notes-total.component.html',
  styleUrls: ['./notes-total.component.scss'],
})
export class NotesTotalComponent implements OnInit, DoCheck {
  needByuTotal: number;
  boughtTotal: number;
  notes: any;
  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
    this.getTotals();
  }

  ngDoCheck(): void {
    this.getTotals();
  }

  getNotes() {
    this.notesService.getNotes().subscribe((notes) => {
      this.notes = notes;
      console.log(notes, '@@@@@@@@@@@@@@@@@@@@');
    });
  }

  getTotals() {
    this.needByuTotal = this.notesService.getNeedToBuyTotal();
    this.boughtTotal = this.notesService.getBoughtTotal();
  }
}
