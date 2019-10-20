import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Beef Lasagna',
      'A traditional, hearty meal made with red wine making the mince extra delicious.',
      'https://img.taste.com.au/4geSvCZK/w720-h480-cfill-q80/taste/2016/11/beef-lasagne-77009-1.jpeg'
    ),
    new Recipe(
      'Rogan Josh',
      'A famous Kashmiri Indian lamb curry with enticing spices.',
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/rogan-josh-01.jpg?itok=pX5BAdXT&mtime=1505184085'
    ),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}
