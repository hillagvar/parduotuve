import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(user: User) {
    console.log('registruojam nauja vartotoja');
    console.log(user);
    return this.httpClient.post("http://localhost:4999/auth/signin", user);
  }

  public loginUser(user: User) {
    return this.httpClient.post("http://localhost:4999/auth/login", user)

  }
}
