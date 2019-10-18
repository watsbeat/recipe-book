import { Component, OnInit } from '@angular/core';
/** Models */
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Beef Lasagna',
      'A traditional, hearty meal made with red wine making the mince extra delicious.',
      'https://img.taste.com.au/4geSvCZK/w720-h480-cfill-q80/taste/2016/11/beef-lasagne-77009-1.jpeg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
