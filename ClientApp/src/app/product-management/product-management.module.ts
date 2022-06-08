import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import {NewProductComponent} from './product/new-product/new-product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    NewCategoryComponent,
    NewProductComponent,
    ProductListComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MaterialFileInputModule
  ]
})
export class ProductManagementModule { }
