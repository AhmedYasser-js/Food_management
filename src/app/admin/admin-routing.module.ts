import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'category', component: CategoryComponent, title: 'category' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
