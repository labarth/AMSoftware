import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface INote {
  id: string;
  date: Date;
  description: string;
  price: number;
  isNeedBuy: boolean;
}
const Notes: Array<INote> = [
  {
    id: v4(),
    date: new Date(),
    description: 'Холодильник',
    price: 1250,
    isNeedBuy: false,
  },
  {
    id: v4(),
    date: new Date(),
    description: 'Стиральная машина',
    price: 1300,
    isNeedBuy: false,
  },
  {
    id: v4(),
    date: new Date(),
    description: 'Плита кухонна',
    price: 770,
    isNeedBuy: false,
  },
  {
    id: v4(),
    date: new Date(),
    description: 'Духовой шкаф',
    price: 770,
    isNeedBuy: false,
  },
  {
    id: v4(),
    date: new Date(),
    description: 'Микроволновка',
    price: 720,
    isNeedBuy: false,
  },
  {
    id: v4(),
    date: new Date(),
    description: 'Двери и плинтуса',
    price: 1800,
    isNeedBuy: true,
  },
];

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = Notes;

  constructor(private http: HttpClient) {
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
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    console.log(headers, '@@@@@@@@@@');

    return this.http.get('https://am-soft.herokuapp.com/api/notes', { headers });
  }

  getNeedToBuyTotal() {
    return this.getTotal(true);
  }

  getBoughtTotal() {
    return this.getTotal(false);
  }

  addNote(note: INote) {
    this.notes.push(note);
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
