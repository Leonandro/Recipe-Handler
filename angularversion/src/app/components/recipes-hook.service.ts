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

  async handleNewRecipe() {
    var value = prompt('Digite a nova receita');

    if(value){
      await db.collection("recipes").add({
        name: value,
        calorias: 0
      })

      this.renderData();
      //this.recipes = [...this.recipes, {id: 4, name: value}];
    }
  }
}
 