import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeResolverService} from "./recipes/recipe-resolver.service";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";


const appRoutes: Routes = [
  { path: '', redirectTo:'/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent,
    canActivate: [AuthGuard],
      children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService]},
        { path: ':id/edit', component: RecipeEditComponent,  resolve: [RecipeResolverService]},
      ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent,
    children: [
      {path: ':id/edit', component: ShoppingEditComponent}
    ]
  },
  { path: 'auth', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
