import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import {NewProductComponent} from './product/new-product/new-product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';
import {ProductAcceptanceComponent} from '../product-management/productacceptance/productacceptance/productacceptance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  { path: 'update-product/:productId', 
  component: UpdateProductComponent 
  },
  {
    path: 'add-product',
    component: NewProductComponent,
  },

  {
    path: 'category-list',
    component: CategoryListComponent,
  },
  { path: 'update-category/:categoryId', 
  component: NewCategoryComponent 
  },
  {
    path: 'add-category',
    component: NewCategoryComponent,
  },
  {
    path: 'product-acceptance',
    component: ProductAcceptanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
