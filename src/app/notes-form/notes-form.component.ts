import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../services/notes.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss']
})
export class NotesFormComponent implements OnInit {
  form: FormGroup;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.form =  new FormGroup({
      date: new FormControl(new Date(), Validators.required),
      isNeedByu: new FormControl('0'),
      price: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.pattern('^\\d{0,8}(\\.\\d{1,4})?$')]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  submit() {
    const {
      date,
      price,
      description,
      isNeedByu,
    } = this.form.value;

    this.notesService.addNote({
      id: v4(),
      date: new Date(date).getTime(),
      price: parseFloat(price),
      description,
      isNeedBuy: Boolean(Number(isNeedByu)),
    });
  }
}
