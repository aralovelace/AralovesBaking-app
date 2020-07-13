import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent  {

  @Input()  recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) { }


  OnSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
