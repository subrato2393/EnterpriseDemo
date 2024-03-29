import { Component,Inject, OnInit,Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/Category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SelectedModel } from '../../../core/models/selectedModel';

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrls: ['./category-popup.component.sass']
})
export class CategoryPopupComponent implements OnInit {
  pageTitle: string;
  destination:string;
  btnText:string;
  CategoryForm: FormGroup;
  validationErrors: string[] = [];
  dialogTitle: string;
  selectedCategory:SelectedModel[];

  constructor(
    private snackBar: MatSnackBar,
    @Optional() public dialogRef: MatDialogRef<CategoryPopupComponent>,
    @Optional()  @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private fb: FormBuilder, 
    private router: Router,  
    
    private route: ActivatedRoute) 
    { 
      
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('categoryId'); 
    this.dialogTitle = 'New Category';
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
      name: ['', Validators.required]
    })
  }
  getSelectedCategory(){
    this.categoryService.getSelectedCategory().subscribe(res=>{
     this.selectedCategory=res;
     console.log(this.selectedCategory);
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {

  }
  onSubmit() {
    const id = this.CategoryForm.get('categoryId').value;  
    console.log(id+"88888");
    if (id) {
       console.log(this.CategoryForm.value);
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
    }  else {
      this.categoryService.submit(this.CategoryForm.value).subscribe(response => {
        this.router.navigateByUrl('/product-management/add-product');
        this.snackBar.open('Information Inserted Successfully ', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: 'snackbar-success'
        });
        this.getSelectedCategory();
      }, error => {
        this.validationErrors = error;
      })
    }
 
  }

}
