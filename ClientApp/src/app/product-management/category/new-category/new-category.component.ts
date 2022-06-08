import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/Category.service';
//import { ConfirmService } from '../../../core/service/confirm.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.sass']
})
export class NewCategoryComponent implements OnInit {
  pageTitle: string;
  destination:string;
  btnText:string;
  CategoryForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private snackBar: MatSnackBar,/*private confirmService: ConfirmService,*/private categoryService: CategoryService,private fb: FormBuilder, private router: Router,  private route: ActivatedRoute) { }

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
            //menuPosition: res.menuPosition,
          
          });          
        }
      );
    } else {
      this.pageTitle = 'Create Category';
      this.destination = "Add";
      this.btnText = 'Save';
    }
    this.intitializeForm();
  }
  intitializeForm() {
    this.CategoryForm = this.fb.group({
      categoryId: [0],
      name: ['', Validators.required]
    })
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
