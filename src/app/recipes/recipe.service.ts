import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Beef Lasagna',
      'A traditional, hearty meal made with red wine making the mince extra delicious.',
      'https://img.taste.com.au/4geSvCZK/w720-h480-cfill-q80/taste/2016/11/beef-lasagne-77009-1.jpeg',
      [
        new Ingredient('Lean beef mince', 1),
        new Ingredient('Brown onion', 1),
        new Ingredient('Garlic cloves', 2),
        new Ingredient('Tomato pasta sauce', 1),
      ]
    ),
    new Recipe(
      'Rogan Josh',
      'A famous Kashmiri Indian lamb curry with enticing spices.',
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/rogan-josh-01.jpg?itok=pX5BAdXT&mtime=1505184085',
      [
        new Ingredient('Cubed lamb', 1),
        new Ingredient('Chilli powder', 1),
        new Ingredient('Red onions', 3),
        new Ingredient('Bay leaves', 3),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
