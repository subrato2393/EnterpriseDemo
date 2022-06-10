import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/Category.service';
import { SelectedModel } from 'src/app/core/models/selectedModel';
import { ProductService } from '../../service/Product.service';
import {ProductList} from '../../models/ProductList';

@Component({
  selector: 'app-productacceptance',
  templateUrl: './productacceptance.component.html',
  styleUrls: ['./productacceptance.component.sass']
})
export class ProductAcceptanceComponent implements OnInit {

  pageTitle: string;
  destination:string;
  btnText:string;
  CategoryForm: FormGroup;
  validationErrors: string[] = [];
  selectedCategory:SelectedModel[];
  productList:ProductList[];
  isShown: boolean = false ;

  constructor(private snackBar: MatSnackBar,/*private confirmService: ConfirmService,*/private categoryService: CategoryService,private productService: ProductService,private fb: FormBuilder, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('categoryId'); 
    if (id) {
      this.pageTitle = 'Edit Category';
      this.destination = "Edit";
      this.btnText = 'Update';
      this.categoryService.find(+id).subscribe(
        res => {
          this.CategoryForm.patchValue({          

            categoryId: res.categoryId,
            name: res.name,
          });          
        }
      );
    } else {
      this.pageTitle = 'Create Category';
      this.destination = "Add";
      this.btnText = 'Save';
    }
    this.intitializeForm();
    this.getSelectedCategory();
  }
  intitializeForm() {
    this.CategoryForm = this.fb.group({
      categoryId: [0],
      productList: this.fb.array([this.createProductForm()]),
    })
  }
  private createProductForm() {
    return this.fb.group({
      categoryId:[''],
      name: [''],
      code:[''],
      qty:[''],
      price:[''],
    });
  } 

  loadDataDynamicFormWithoutInput(index: number, type: string) {
    return (this.CategoryForm.get('productList') as FormArray).at(index).get(type).value;
  }
  getSelectedCategory(){
    this.categoryService.getSelectedCategory().subscribe(res=>{
     this.selectedCategory=res;
    })
  }
  loadProductListDynamicForm() {
    const control = <FormArray>this.CategoryForm.controls["productList"];
    console.log("productlist");
    console.log(this.productList)
    for (let i = 0; i < this.productList.length; i++) {
      control.push(this.createProductForm());
    }
    this.CategoryForm.patchValue({ productList: this.productList });
   // console.log("value...");
    //console.log(this.traineeList)
  }

  removeList() {
    const control = <FormArray>this.CategoryForm.controls["productList"];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
  }
  onCategorySelectionChange(dropdown){
    if (dropdown.isUserInput) {
      this.isShown=true;
      console.log(dropdown.source.value);
      this.productService.getProductByCategoryId(dropdown.source.value.value).subscribe(res => {
        this.productList = res;
        console.log("trainee List");
        console.log(this.productList);
        this.removeList();
        this.loadProductListDynamicForm();
      });
    }
  }

  onSubmit() {
    const id = this.CategoryForm.get('categoryId').value;  
    console.log(id);
    if (id) {
     // this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(result => {
       // console.log(this.CategoryForm.value);
   //     if (result) {
          this.categoryService.update(+id,this.CategoryForm.value).subscribe(response => {
            this.router.navigateByUrl('/product-management/category-list');
            this.snackBar.open('Information Updated Successfully ', '', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: 'snackbar-success'
            });
          }, error => {
            this.validationErrors = error;
          })
      //  }
      //})
    }  else {
      this.categoryService.submit(this.CategoryForm.value).subscribe(response => {
        this.router.navigateByUrl('/product-management/category-list');
        this.snackBar.open('Information Inserted Successfully ', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: 'snackbar-success'
        });
      }, error => {
        this.validationErrors = error;
      })
    }
 
  }
}
