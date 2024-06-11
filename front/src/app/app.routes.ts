import { Routes } from '@angular/router';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';

export const routes: Routes = [
    {path: "products/list", component: ProductListComponent},
    {path: "products/new", component: NewProductComponent},
    {path: "products/:id", component: UpdateProductComponent},
    {path: "", component: HomePageComponent},
    

];
