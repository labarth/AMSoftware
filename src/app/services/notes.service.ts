import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { HttpClient } from '@angular/common/http';

interface INote {
  id: string;
  date: Date;
  description: string;
  price: number;
  isNeedBuy: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Array<INote>;

  constructor(private http: HttpClient) {
    this.notes = [];
  }

  getTotal(isNeedToBuy: boolean = false) {
    return this.notes.reduce((acc, note) => {

      if (isNeedToBuy) {
        if (note.isNeedBuy) {
          acc += note.price;
        }
      } else {
        if (!note.isNeedBuy) {
          acc += note.price;
        }
      }

      return acc;
    }, 0);
  }

  getNotes() {
    this.http.get('http://localhost:8080/api/notes').subscribe((notes: Array<INote>) => {
      this.notes = notes;
    });
  }

  getNeedToBuyTotal() {
    return this.getTotal(true);
  }

  getBoughtTotal() {
    return this.getTotal(false);
  }

  addNote(note: INote) {
    this.notes.push(note);
    this.http.patch('https://am-soft.herokuapp.com/api/notes', note, {  responseType: 'text' }).subscribe();
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.http.delete(`https://am-soft.herokuapp.com/api/notes`, { responseType: 'text', params: { id }}).subscribe();
  }
}
