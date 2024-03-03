import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
// import { AdminComponent } from './admin.component';
// import { CategoryComponent } from './components/category/category.component';
// import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }