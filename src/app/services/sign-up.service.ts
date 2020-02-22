import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

interface IUser {
  name: string;
  surname?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  singUp(user: IUser) {
    return this.http.post(`${API_URL}/signUp`, user);
  }
}
