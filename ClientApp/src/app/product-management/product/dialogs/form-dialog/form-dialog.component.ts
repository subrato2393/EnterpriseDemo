import { Component,Inject, OnInit,Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../service/Category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//import { ConfirmService } from '../../../core/service/confirm.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent implements OnInit {
  pageTitle: string;
  destination:string;
  btnText:string;
  CategoryForm: FormGroup;
  validationErrors: string[] = [];
  dialogTitle: string;

  // constructor( @Optional() private dialogRef: MatDialogRef, @Optional() @Inject(MAT_DIALOG_DATA) public IrId: any) {}

  constructor(
   // @Optional() private dialogRef: MatDialogRef,
    private snackBar: MatSnackBar,
    @Optional() public dialogRef: MatDialogRef<FormDialogComponent>,
    @Optional()  @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private fb: FormBuilder, 
    private router: Router,  
    private route: ActivatedRoute) 
    { 
      
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('categoryId'); 
    this.dialogTitle = 'New Teachers';
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  // public confirmAdd(): void {
  //   this.categoryService.addTeachers(this.proForm.getRawValue());
  // }
  submit() {
    // emppty stuff
  }
  onSubmit() {
    const id = this.CategoryForm.get('categoryId').value;  
    console.log(id);
    if (id) {
     // this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(result => {
       console.log(this.CategoryForm.value);
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
        this.router.navigateByUrl('/product-management/add-product');
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
