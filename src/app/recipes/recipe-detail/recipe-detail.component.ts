import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    if (!this.recipe.ingredients.length) {
      alert('No ingredients found');
    }
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
