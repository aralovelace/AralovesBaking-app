import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  startedEditing = new Subject<number>()

  private ingredients : Ingredient[] =  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

}
