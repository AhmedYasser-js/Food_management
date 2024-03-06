import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesComponent } from './recipes.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
