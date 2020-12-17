import { Injectable } from '@angular/core';
import {db} from '../../firebase';

@Injectable({
  providedIn: 'root'
})
export class RecipesHookService {

  constructor() { }

  recipes = []; 


  async  renderData() {
    const snapshot = await db.collection("recipes").get();
      const loadingData = [];
      snapshot.forEach((doc) => {
        loadingData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.recipes = loadingData;
  };

  async handleNewRecipe(newRecipe) {

    if(newRecipe.name && newRecipe.recipe){
      await db.collection("recipes").add({
        name: newRecipe.name,
        calorias: newRecipe.calorias,
        recipe: newRecipe.recipe
    })


      this.renderData();
      alert('Nova receita cadastrada')
      //this.recipes = [...this.recipes, {id: 4, name: value}];
    }
  }
}
 