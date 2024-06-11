import { Component } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

  public products : Product[] = []

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data) => {
      
      this.products = data;

    });
  }
  

}
