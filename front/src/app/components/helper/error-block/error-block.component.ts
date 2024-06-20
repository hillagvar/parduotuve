import { Component } from '@angular/core';
import { ErrorComponent } from '../error/error.component';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-error-block',
  standalone: true,
  imports: [ErrorComponent],
  templateUrl: './error-block.component.html',
  styleUrl: './error-block.component.css'
})
export class ErrorBlockComponent {
  public isError : boolean = false;
  public errorText: string = "";

  constructor (private errorService: ErrorService) {
    this.errorService.errorEmitter.subscribe((text) => {
      this.isError = true;
      this.errorText = text;
      //po 10 sekundziu klaida paslepiama
      setTimeout(() => {
        this.isError = false;
      }, 10000);
<<<<<<< HEAD
=======

>>>>>>> 0004e1dc5e8d16fc8fe880cf594b15d53bc97231

    })

  }

}
