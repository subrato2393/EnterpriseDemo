import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  // product-management/category-list
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
