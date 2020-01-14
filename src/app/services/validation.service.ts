import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static match(control: AbstractControl ) {
    if (control.get('password').value !== control.get('confirmPassword').value) {
      control.get('confirmPassword').setErrors({ invalidMatch: true });
    }

    return null;
  }
}
