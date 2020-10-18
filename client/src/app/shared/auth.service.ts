import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Globals } from './globals';
// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private globals: Globals) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(this.globals.API_URI + '/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(this.globals.API_URI + '/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(this.globals.API_URI + '/auth/user-profile');
  }

}
