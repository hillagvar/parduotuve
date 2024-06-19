import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private authService: AuthService, private errorService: ErrorService) {}

  public onRegister(f: NgForm) {
    console.log(f.form.value);
    this.authService.registerUser(f.form.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorService.errorEmitter.emit(error.error.text);
      }
    })

  }

}
