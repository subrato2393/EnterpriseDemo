import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../../models/Category';
import { CategoryService } from '../../service/Category.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
// import { ConfirmService } from 'src/app/core/service/confirm.service';
import{MasterData} from 'src/assets/data/master-data';
import { MatSnackBar } from '@angular/material/snack-bar';
 

@Component({
  selector: 'app-category',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {

  masterData = MasterData;
  ELEMENT_DATA: Category[] = [];
  isLoading = false;
  
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText="";

  displayedColumns: string[] = [ 'ser', 'name','actions'];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource();

  selection = new SelectionModel<Category>(true, []);
  
  constructor(private snackBar: MatSnackBar,private categoryService: CategoryService,private router: Router,/*private confirmService: ConfirmService*/) { }
  
  ngOnInit() {
    this.getCategories();
  }
 
  getCategories() {
    this.isLoading = true;
    this.categoryService.getCategories(this.paging.pageIndex, this.paging.pageSize,this.searchText).subscribe(response => {
      
      this.dataSource.data = response.items; 
      this.paging.length = response.totalItemsCount    
      this.isLoading = false;
    })
  }

  pageChanged(event: PageEvent) {
    this.paging.pageIndex = event.pageIndex
    this.paging.pageSize = event.pageSize
    this.paging.pageIndex = this.paging.pageIndex + 1
    this.getCategories();
  }

  applyFilter(searchText: any){ 
    this.searchText = searchText;
    this.getCategories();
  } 

  deleteItem(row) {
    const id = row.categoryId; 
  //  this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This  Item').subscribe(result => {
  //    console.log(result);
   //  if (result) {
        this.categoryService.delete(id).subscribe(() => {
          this.getCategories();
          this.snackBar.open('Information Deleted Successfully ', '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: 'snackbar-danger'
          });
        })
    // }
  //  })    
  }
}
