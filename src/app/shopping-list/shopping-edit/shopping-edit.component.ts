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

  onAdd(name: string, amount: number) {
    this.ingredients.push(
      new Ingredient(name, amount)
    );
  }

  onDelete() {
    this.ingredients.pop();
  }

  onClear() {
    this.ingredients.splice(0, this.ingredients.length);
  }

}
