import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceptanceService } from '../../service/Acceptance.service';
import { SelectedModel } from 'src/app/core/models/selectedModel';
import { ProductService } from '../../service/Product.service';
import {ProductList} from '../../models/ProductList';
import { CategoryService } from '../../service/Category.service';

@Component({
  selector: 'app-productacceptance',
  templateUrl: './productacceptance.component.html',
  styleUrls: ['./productacceptance.component.sass']
})
export class ProductAcceptanceComponent implements OnInit {

  pageTitle: string;
  destination:string;
  btnText:string;
  AcceptanceForm: FormGroup;
  validationErrors: string[] = [];
  selectedAcceptance:SelectedModel[];
  productList:ProductList[];
  isShown: boolean = false ;

  constructor(private snackBar: MatSnackBar,private categoryService: CategoryService,/*private confirmService: ConfirmService,*/private acceptanceService: AcceptanceService,private productService: ProductService,private fb: FormBuilder, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('acceptanceId'); 
      this.pageTitle = 'Create Acceptance';
      this.destination = "Add";
      this.btnText = 'Save';
    // if (id) {
    //   this.pageTitle = 'Edit Acceptance';
    //   this.destination = "Edit";
    //   this.btnText = 'Update';
    //   this.acceptanceService.find(+id).subscribe(
    //     res => {
    //       this.AcceptanceForm.patchValue({          

    //         acceptanceId: res.acceptanceId,
    //         name: res.name,
    //       });          
    //     }
    //   );
    // } else {
    //   this.pageTitle = 'Create Acceptance';
    //   this.destination = "Add";
    //   this.btnText = 'Save';
    // }
    this.intitializeForm();
    this.getSelectedCategory();
  }
  intitializeForm() {
    this.AcceptanceForm = this.fb.group({
      acceptanceId: [0],
      categoryId:[''],
      categoryIds:[''],
      productList: this.fb.array([this.createProductForm()]),
    })
  }
  private createProductForm() {
    return this.fb.group({
      name: [''],
      code:[''],
      qty:[],
      price:[],
      categoryName:[''],
      acceptanceName:[''],
      isActive:[]
    });
  } 

  loadDataDynamicFormWithoutInput(index: number, type: string) {
    return (this.AcceptanceForm.get('productList') as FormArray).at(index).get(type).value;
  }
  getSelectedCategory(){
    this.categoryService.getSelectedCategory().subscribe(res=>{
     this.selectedAcceptance=res;
    })
  }
  loadProductListDynamicForm() {
    const control = <FormArray>this.AcceptanceForm.controls["productList"];
    console.log("productlist");
    console.log(this.productList)
    for (let i = 0; i < this.productList.length; i++) {
      control.push(this.createProductForm());
    }
    this.AcceptanceForm.patchValue({ productList: this.productList });
   // console.log("value...");
    //console.log(this.traineeList)
  }

  removeList() {
    const control = <FormArray>this.AcceptanceForm.controls["productList"];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
  }
  onCategorySelectionChange(dropdown){
    if (dropdown.isUserInput) {
      this.isShown=true;
      console.log(dropdown.source.value);
      this.AcceptanceForm.get('categoryId').setValue(dropdown.source.value.value);
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
    const id = this.AcceptanceForm.get('acceptanceId').value;  
    console.log(id);
    // if (id) {
     // this.confirmService.confirm('Confirm Update message', 'Are You Sure Update This  Item').subscribe(result => {
        console.log(this.AcceptanceForm.value);
   //     if (result) {
          // this.acceptanceService.update(+id,this.AcceptanceForm.value).subscribe(response => {
          //   this.router.navigateByUrl('/product-management/acceptance-list');
          //   this.snackBar.open('Information Updated Successfully ', '', {
          //     duration: 2000,
          //     verticalPosition: 'bottom',
          //     horizontalPosition: 'right',
          //     panelClass: 'snackbar-success'
          //   });
          // }, error => {
          //   this.validationErrors = error;
          // })
      //  }
      //})
    // }  else {
      this.acceptanceService.submit(this.AcceptanceForm.value).subscribe(response => {
        this.router.navigateByUrl('/product-management/acceptance-list');
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
//}
