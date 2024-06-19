import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  public isLoggedIn : boolean = false;

  constructor (private authService: AuthService) {
    if (authService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.authService.onLoginStatusChange.subscribe((isLoggedIn)=> {
      this.isLoggedIn = isLoggedIn;
    })
    
  }

  public logOutClick() {
    this.authService.logOut();
    this.isLoggedIn = false;

  }

}
