import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private authService: AuthService) {}

  public onLogin(f: NgForm) {
    console.log(f.form.value);
    this.authService.loginUser(f.form.value).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

}
