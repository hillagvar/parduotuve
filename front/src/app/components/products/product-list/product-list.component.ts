import { Component } from '@angular/core';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductTableComponent } from './product-table/product-table.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductFilterComponent, ProductTableComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
