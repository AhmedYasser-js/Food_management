import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    CategoryComponent,
    AddEditCategoryComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
