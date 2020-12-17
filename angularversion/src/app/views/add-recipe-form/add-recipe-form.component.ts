import { Component, OnInit } from '@angular/core';
import { RecipesHookService } from '../../components/recipes-hook.service';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent implements OnInit { 

  constructor(public recipeService: RecipesHookService) {}

  recipeToBeAdded = {name: '', calories: null, recipe: ''};

  submitStatus = null;

  formStatus = null;



  submit(name, calories, recipe) {
    
    if(name.control.valid && recipe.control.valid) {
      this.recipeService.handleNewRecipe({
        name: name.control.value,
        calorias: calories.control.value,
        recipe: recipe.control.value
      })
    }

    
  }


  

  ngOnInit(): void {
  }

}
