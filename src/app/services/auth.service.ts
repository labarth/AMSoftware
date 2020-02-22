import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

interface ICred {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  logIn(cred: ICred) {
    return this.http.post(`${API_URL}/login`, cred);
  }

  logInAs(token: string) {
    return this.http.post(`${API_URL}/login-as`, { token });
  }
}
