import { Injectable } from "../../../node_modules/@angular/core";
import { Http, Response } from "../../../node_modules/@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators'; 

@Injectable()
export class DataStorageService {
   constructor( private http: Http, private recipeService: RecipeService) {}

   storeRecipes() {
      return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
   }

   getRecipes() {
     this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json').pipe(
        map(
            (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })        
       )
       .subscribe(
            (recipes: Recipe[]) => {                
                this.recipeService.setRecipes(recipes);
            }
       );
   }
}