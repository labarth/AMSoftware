import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form =  new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });

    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');

      this.authService.logInAs(token).subscribe((response) => {
        console.log(response, '@@@@@@@@');
      });
    }
  }

  logIn() {
    this.authService.logIn(this.form.value).subscribe(({ user, token }) => {
      localStorage.setItem('token', token);
    });
  }
}
