import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipesService} from "../recipes/recipes.service";
import {Recipe} from "../recipes/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipesService, private authService: AuthService) {

  }

  storeRecipes() {
    const  recipes = this.recipesService.getRecipes();
    return this.http.put('https://aralovesbaking.firebaseio.com/recipes.json',
      recipes
    ).subscribe(response => {
      console.log(recipes);
    })
  }

  fetchRecipes() {

      return this.http.get<Recipe[]>('https://aralovesbaking.firebaseio.com/recipes.json').pipe(
      map(recipes =>{
        return recipes.map(recipe => {
          return {
            ... recipe,
            ingredients: recipe.ingredients ? recipe.ingredients: []
          }
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
      );

  }

}
