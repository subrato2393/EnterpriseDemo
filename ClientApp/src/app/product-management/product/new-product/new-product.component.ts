import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/Product.service';
// import { ConfirmService } from '../../../core/service/confirm.service';
import { CategoryService } from '../../service/Category.service';
import { Category } from '../../models/Category';
import { SelectionModel } from '@angular/cdk/collections';
import { SelectedModel } from '../../../core/models/selectedModel';
import { NewCategoryComponent } from '../../category/new-category/new-category.component';
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { FormDialogComponent } from '../dialogs/form-dialog/form-dialog.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.sass']
})
export class NewProductComponent extends UnsubscribeOnDestroyAdapter  implements OnInit {
  pageTitle: string;
  destination:string;
  btnText:string;
  ProductForm: FormGroup;
  validationErrors: string[] = [];
  selectedCategory:SelectedModel[];

  constructor(private snackBar: MatSnackBar,
    private categoryService: CategoryService,
    public dialog: MatDialog,
   // private confirmService: ConfirmService,
    private productService: ProductService,
    private fb: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute)
      {
        super();
       }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('productId'); 
    if (id) {
      this.pageTitle = 'Edit Product';
      this.destination = "Edit";
      this.btnText = 'Update';
      this.productService.find(+id).subscribe(
        res => {
          this.ProductForm.patchValue({          
            productId: res.productId,
            name: res.name,
            code: res.code,
            qty: res.qty,
            price: res.price,
            status: res.status,
            categoryId: res.categoryId
          });          
        }
      );
    } else {
      this.pageTitle = 'Create Product';
      this.destination = "Add";
      this.btnText = 'Save';
    }
    this.intitializeForm();
    this.getSelectedCategory();
  }
  intitializeForm() {
    this.ProductForm = this.fb.group({
      productId: [0],
      categoryId: [''],
      product:  this.fb.array([
        this.createProductForm()
      ]), 
    })
  }
  
    private createProductForm() {
      return this.fb.group({
        name: [''],
        code:[''],
        qty:[''],
        price:[''],
        status:[''],
      });
    }
  getSelectedCategory(){
    this.categoryService.getSelectedCategory().subscribe(res=>{
     this.selectedCategory=res;
    })
  }
  addProduct(){
    const control=<FormArray>this.ProductForm.controls['product'];
    control.push(this.createProductForm()); 
  }
  removeProduct(index){
      const control = <FormArray>this.ProductForm.controls["product"];
      control.removeAt(index);
  }

  addNew() {
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        teachers: this.selectedCategory,
        action: 'add',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
      this.getSelectedCategory();
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        // this.exampleDatabase.dataChange.value.unshift(
        //   this.teachersService.getDialogData()
        // );
        // this.refreshTable();
        // this.showNotification(
        //   'snackbar-success',
        //   'Add Record Successfully...!!!',
        //   'bottom',
        //   'center'
        // );
      }
    });
  }

  onSubmit() {
    const id = this.ProductForm.get('productId').value;  
    console.log(id);
    if (id) {
     // this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(result => {
       // console.log(this.ProductForm.value);
   //     if (result) {
          this.productService.update(+id,this.ProductForm.value).subscribe(response => {
            this.router.navigateByUrl('/product-management/product-list');
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
      this.productService.submit(this.ProductForm.value).subscribe(response => {

        this.router.navigateByUrl('/product-management/product-list');
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
