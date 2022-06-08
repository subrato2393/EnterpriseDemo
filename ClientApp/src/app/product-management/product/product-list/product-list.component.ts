import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/Product';
import { ProductService } from '../../service/Product.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ConfirmService } from 'src/app/core/service/confirm.service';
import {MasterData} from '../../../../../src/assets/data/master-data';
import { MatSnackBar } from '@angular/material/snack-bar';
 

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  masterData = MasterData;
  ELEMENT_DATA: Product[] = [];
  isLoading = false;
  
  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: this.masterData.paging.pageSize,
    length: 1
  }
  searchText="";
  displayedColumns: string[] = [ 'ser','categoryName', 'name','code','qty','price','status','actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  selection = new SelectionModel<Product>(true, []);
  
  constructor(private snackBar: MatSnackBar,private productService: ProductService,private router: Router,/*private confirmService: ConfirmService*/) { }
  
  ngOnInit() {
    this.getProducts();
  }
 
  getProducts() {
    this.isLoading = true;
    this.productService.getProducts(this.paging.pageIndex, this.paging.pageSize,this.searchText).subscribe(response => {
      
      this.dataSource.data = response.items; 
      this.paging.length = response.totalItemsCount    
      this.isLoading = false;
    })
  }

  pageChanged(event: PageEvent) {
    this.paging.pageIndex = event.pageIndex
    this.paging.pageSize = event.pageSize
    this.paging.pageIndex = this.paging.pageIndex + 1
    this.getProducts();
  }

  applyFilter(searchText: any){ 
    this.searchText = searchText;
    this.getProducts();
  } 

  deleteItem(row) {
    const id = row.productId; 
  //  this.confirmService.confirm('Confirm delete message', 'Are You Sure Delete This  Item').subscribe(result => {
  //    console.log(result);
  //    if (result) {
        this.productService.delete(id).subscribe(() => {
          this.getProducts();
          this.snackBar.open('Information Deleted Successfully ', '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: 'snackbar-danger'
          });
        })
     }
  //   })    
  // }
}
