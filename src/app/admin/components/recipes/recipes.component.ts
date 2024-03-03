import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
// import { ICategoryTable, ICategory } from '../../model/Category';
import { IRecipeTable, IRecipes, ITag } from '../../model/irecipes';
import { HelperService } from '../../services/helper.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../model/Category';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  constructor(private _HelperService: HelperService, private _RecipesService: RecipesService, private dialog: MatDialog, private _ToastrService: ToastrService, private _CategoryService: CategoryService) { }

  searchKey: string = '';
  message: string = '';

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageNumber: number = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent | any;

  // tableResponse: IRecipeTable | undefined;
  tableResponse: any;
  tableData: IRecipes[] = [];
  tags: ITag[] = [];
  Categories: ICategory[] = [];
  imagePath: string = 'https://upskilling-egypt.com';
  notFoundRecipes: string = '../../../../assets/images/recipeImg.jpg';
  tagId: number = 0;
  CategoriesId: number = 0;

  ngOnInit(): void {
    this.getRecipes();
    this.getAllTags();
    this.getAllCategory();
  }

  getRecipes() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      // name: this.searchKey,
      // name: '',
      tagId: this.tagId > 0 ? this.tagId : 0,
      categoriesId: this.CategoriesId
    }
    this._RecipesService.getAllRecipe(paramsApi).subscribe({
      next: (response) => {
        console.log(response.pageSize);
        console.log(response)
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
    this.getRecipes()
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
  //         enableHtml: true // This allows HTML content to be rendered in the Toastr message
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
  //       // console.log(res)
  //       // this.message = res;
  //     }, error: (error) => {
  //       this.message = error.error.message;
  //       this._ToastrService.error(`error in deleted Pross!`);
  //     }, complete: () => {
  //       this.getCategories();
  //       this._ToastrService.success(`The Category was deleted successfully`);
  //     }
  //   })
  // }



  getAllCategory() {
    this._CategoryService.getAllCategory(1000, 1, '').subscribe({
      next: (response) => {
        console.log(response.data)
        this.Categories = response.data;
      }
    })
  }

  getAllTags() {
    this._HelperService.getAllRecipe().subscribe({
      next: (response) => {
        console.log(response)
        this.tags = response;
      }
    })
  }
}
