import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form =  new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(8),
        ]),
    }, ValidationService.match('password', 'confirmPassword'));
  }

  submit() {

  }
}
