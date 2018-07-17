import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe(
              'A Test Recipe',
              'simply a test',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
               [
                   new Ingredient('Meat',1),
                   new Ingredient('Fries',2),
               ]),
        new Recipe(
               'Another Test Recipe',
               'simply a test',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
               [
                new Ingredient('Bun',1),
                new Ingredient('Meat',2),
               ])
     ];

     constructor(private slService: ShoppingListService) {}

     getRecipes() {
         return this.recipes.slice();
     }

getRecipe(index:number ) {
    return this.recipes[index];
}


     addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients);
     }    
   
}