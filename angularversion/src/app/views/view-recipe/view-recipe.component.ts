import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RecipesHookService } from '../../components/recipes-hook.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  constructor(private route: ActivatedRoute, public recipeService: RecipesHookService) { }

  recipeName = ''
  correspondRecipes = []

  filterRecipes () {
    if(this.recipeName !== ''){
        let matchedRecipes = this.recipeService.recipes.filter(item => {
            return item.name.includes(this.recipeName)})
        if(matchedRecipes) {
            this.correspondRecipes = matchedRecipes;
        }
    }
    
}

  ngOnInit(): void {
    this.route.params.subscribe( param => this.recipeName = param.name);
    this.filterRecipes();
    
  }

}
