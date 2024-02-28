import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory, ICategoryTable, } from '../../model/Category';
import { PageEvent } from '@angular/material/paginator';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private _CategoryService: CategoryService, private dialog: MatDialog) { }

  searchKey: string = ''

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageNumber: number = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent | any;


  tableResponse: ICategoryTable | undefined;
  tableData: ICategory[] = [];


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._CategoryService.getAllCategory(this.pageSize, this.pageNumber, this.searchKey).subscribe({
      next: (response) => {
        console.log(response.pageSize);
        this.tableResponse = response;
        this.tableData = response.data;
        console.log(this.tableData);
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getCategories()
  }


  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (result) {
        this.addCategory(result.name)
      }
    });
  }

  addCategory(data: string) {
    this._CategoryService.onAddCategory(data).subscribe({
      next: (res) => {
        console.log(res)

      }, error: () => {

      }, complete: () => {
        this.getCategories();
      }
    })
  }




  openEditCategoryDialog(dataCategory: any): void {
    console.log(dataCategory)

    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      // data: { name: this.name, animal: this.animal },
      data: dataCategory,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      if (result) {
        this.editCategory(result)
      }
      console.log(result)
    });
  }

  editCategory(categoryItem: any) {
    this._CategoryService.onEditCategory(categoryItem).subscribe({
      next: (res) => {
        console.log(res)

      }, error: () => {

      }, complete: () => {
        this.getCategories();
      }
    })
  }


  openDeleteCategoryDialog(dataCategory: any): void {
    console.log(dataCategory)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: dataCategory,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.deleteCategory(result)
      }
      console.log(result)
    });
  }


  deleteCategory(categoryId: any) {
    this._CategoryService.onDeleteCategory(categoryId).subscribe({
      next: (res) => {
        console.log(res)

      }, error: () => {

      }, complete: () => {
        this.getCategories();
      }
    })
  }


}


