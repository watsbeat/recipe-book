import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  constructor() { }

  ngOnInit() {}

  onAddItem(name: string, amount: number) {
    this.ingredients.push(
      new Ingredient(name, amount)
    );
  }

  onDeleteItem() {
    this.ingredients.pop();
  }

  onClearItem() {
    this.ingredients.splice(0, this.ingredients.length);
  }

}
