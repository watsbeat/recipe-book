import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onToShoppingList() {
    if (this.recipe.ingredients) {
      this.recipe.ingredients.forEach((ingredient: Ingredient) => {
        this.shoppingListService.addIngredient(ingredient);
      });
      alert('Recipe ingredients added to your shopping list!');
    }
  }
}
