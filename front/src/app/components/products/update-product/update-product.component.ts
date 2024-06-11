import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  
  public name: string ="";
  public price: number = 0;
  public id?: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    
    this.productService.getProduct(this.route.snapshot.params["id"]).subscribe((product)=> {
      this.name = product.name;
      this.price = product.price;
      this.id = product.id;
    })

  }

  public updateProduct(form: NgForm) {
    this.productService.updateProduct({id:this.id, ...form.form.value}).subscribe((data)=> {
      this.router.navigate(["products", "list"]);
    })
  }

  }

  


