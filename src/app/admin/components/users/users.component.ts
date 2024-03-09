import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { ICategory, ICategoryTable } from '../../model/Category';
import { IRecipes, ITag } from '../../model/irecipes';
import { CategoryService } from '../../services/category.service';
import { HelperService } from '../../services/helper.service';
import { RecipesService } from '../../services/recipes.service';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private _HelperService: HelperService, private _UsersService: UsersService, private dialog: MatDialog, private _ToastrService: ToastrService, private _CategoryService: CategoryService) { }


  searchKey: string = '';
  message: string = '';

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageNumber: number = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent | any;
  imagePath: string = 'https://upskilling-egypt.com/';
  notFoundRecipes: string = '../../../../assets/images/avatar.png';


  tableResponse: ICategoryTable | undefined;
  tableData: IUser[] = [];


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      userName: this.searchKey
    }
    this._UsersService.getAllUsers(paramsApi).subscribe({
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
    this.getUsers()
  }


  // openAddCategoryDialog(): void {
  //   const dialogRef = this.dialog.open(AddEditCategoryComponent, {
  //     data: {},
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result)
  //     if (result) {
  //       this.addCategory(result)
  //     }
  //   });
  // }
  // addCategory(data: string) {
  //   this._CategoryService.onAddCategory(data).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //       this.message = res.name;
  //     }, error: (error) => {
  //       this.message = error.error.message;
  //       this._ToastrService.error(`error ${this.message} !`);
  //     }, complete: () => {
  //       this.getCategories();
  //       this._ToastrService.success(`The Category ( <span class="h4">${this.message}</span> ) was Added successfully`, '', {
  //         enableHtml: true
  //       });
  //     }
  //   })
  // }

  // openEditCategoryDialog(dataCategory: any): void {
  //   console.log(dataCategory)
  //   const dialogRef = this.dialog.open(AddEditCategoryComponent, {
  //     data: dataCategory,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     if (result) {
  //       this.editCategory(result, dataCategory.id)
  //     }
  //     console.log(result)
  //   });
  // }
  // editCategory(name: string, id: string) {
  //   this._CategoryService.onEditCategory(name, id).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //       this.message = res.name;
  //     }, error: (error) => {
  //       this.message = error.error.message;
  //       this._ToastrService.error(`error ${this.message} !`);
  //     }, complete: () => {
  //       this.getCategories();
  //       this._ToastrService.success(`The Category ( <span class="h4">${this.message}</span> ) was Edited successfully`, '', {
  //         enableHtml: true // This allows HTML content to be rendered in the Toastr message
  //       });
  //     }
  //   })
  // }


  // openDeleteCategoryDialog(dataCategory: any): void {
  //   console.log(dataCategory)
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     data: dataCategory,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(dataCategory.id, dataCategory.name);
  //     if (result) {
  //       this.deleteCategory(result, dataCategory.name)
  //     }
  //     console.log(dataCategory.id, dataCategory.name);
  //   });
  // }

  // deleteCategory(categoryId: number, name: string) {
  //   this._CategoryService.onDeleteCategory(categoryId, name).subscribe({
  //     next: (res) => {
  //     }, error: (error) => {
  //       this.message = error.error.message;
  //       this._ToastrService.error(`error in deleted Pross!`);
  //     }, complete: () => {
  //       this.getCategories();
  //       this._ToastrService.success(`The Category was deleted successfully`);
  //     }
  //   })
  // }


  openDeleteUserDialog(dataRecipe: any): void {
    console.log(dataRecipe)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: dataRecipe,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(dataRecipe.id, dataRecipe);
      if (result) {
        this.deleteUser(result, dataRecipe.userName)
      }
      console.log(dataRecipe.id, dataRecipe);
    });
  }


  deleteUser(userId: number, name: string) {
    this._UsersService.deleteUsers(userId, name).subscribe({
      next: (res) => {
      }, error: (error) => {
        this.message = error.error.message;
        this._ToastrService.error(`error in deleted Pross!`);
      }, complete: () => {
        this.getUsers();
        this._ToastrService.success(`The User was deleted successfully`);
      }
    })
  }





}
