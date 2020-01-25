import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';

interface INote {
  _id?: string;
  date: number;
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
    this.http.get(`${API_URL}/notes`).subscribe((notes: Array<INote>) => {
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
    this.http.patch(`${API_URL}/notes`, note, {  responseType: 'text' }).subscribe();
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note._id !== id);
    this.http.delete(`${API_URL}/notes`, { responseType: 'text', params: { id }}).subscribe();
  }
}
