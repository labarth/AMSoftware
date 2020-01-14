import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static match(controlName: string, matchControlName: string) {
    return (control: AbstractControl) => {
      if (control.get(controlName).value !== control.get(matchControlName).value) {
        control.get('confirmPassword').setErrors({ invalidMatch: true });
      }

      return null;
    };
  }
}
