import { Component, OnInit } from '@angular/core';
import { RecipesHookService } from '../../components/recipes-hook.service';

@Component({
  selector: 'app-search-recipe-page',
  templateUrl: './search-recipe-page.component.html',
  styleUrls: ['./search-recipe-page.component.css']
})
export class SearchRecipePageComponent implements OnInit {

  constructor(public recipeService: RecipesHookService) { }

  correspondRecipes= [];
  recipeName = '';

  filterRecipes (inputValue) {
    if(inputValue !== ''){
        let matchedRecipes = this.recipeService.recipes.filter(item => {
            let searchLowerCase = inputValue.toLowerCase();
            let recipeLowerCase = item.name.toLowerCase();
            return recipeLowerCase.includes(searchLowerCase)})
        if(matchedRecipes) {
            this.correspondRecipes = matchedRecipes;
        }
    }
    else {
        this.correspondRecipes = []
    }
}

  ngOnInit(): void {
    //alert(this.recipeService.recipes.length)
  }

}
