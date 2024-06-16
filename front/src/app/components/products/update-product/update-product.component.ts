import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  
  public name: string ="";
  public price: number = 0;
  public id?: number = 0;

  public isGetError = false;
  public isUpdError = false;
  public isError = false;
  public errorText = "";

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

    
    this.productService.getProduct(this.route.snapshot.params["id"]).subscribe({
      next: (product) => {
        this.name = product.name;
        this.price = product.price;
        this.id = product.id;
      },
      error: (error) => {
        this.isGetError = true;
        this.isError = true;
        this.errorText = error.error.text;
      }
    });

  }

  public updateProduct(form: NgForm) {
    console.log(form.form.value);
    this.productService.updateProduct({id:this.id, ...form.form.value}).subscribe({
      next: (data)=> {
        this.router.navigate(["products", "list"]);
      },
      error: (error) => {
        this.isUpdError = true;
        this.isError = true;
        this.errorText = error.error.text;
      }
    });

  }

}

  


