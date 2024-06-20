import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user : User | null = null;

  public onLoginStatusChange = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem("user");

    if (user != null) {
      this.user = JSON.parse(user);
    }
   }

  public registerUser(user: User) {
    // console.log('registruojam nauja vartotoja');
    // console.log(user);
    return this.httpClient.post("http://localhost:4999/auth/signin", user);
  }

  public loginUser(user: User) {
    return this.httpClient.post<User>("http://localhost:4999/auth/login", user).pipe(
      tap( (response)=> {
        this.user = response;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.onLoginStatusChange.emit(true);
       })

      );
  }

  public logOut() {
    this.user = null;
    localStorage.removeItem("user");
    this.onLoginStatusChange.emit(false);
  }

  public isLoggedIn() {
    return (this.user != null && this.user.token != null);
  }

  public canEdit() {
    return (this.user != null && (this.user.type == 0 || this.user.type == 1));
  }

  public canEditUsers() {
    return (this.user != null && this.user.type == 0);
  }

  public canViewData() {
    return this.isLoggedIn();
  }
}
