import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorComponent],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

   public isError = false;
  public errorText = "";

  constructor(private productService: ProductService, private router: Router) {

  }

  public productSubmit(form: NgForm) {
    console.log(form.form.value);
    this.productService.addProduct(form.form.value).subscribe({
      next:  (data) => {
      this.router.navigate(["products", "list"]);
      },
      error: (error) => {
        this.isError = true;
        this.errorText = error.error.text;
      }
    })
  }

}
