import { writable } from 'svelte/store'
import {db} from '../firebase'

export function useRecipes() {
  const { subscribe, update, set } = writable([])

  

  const renderData = async () =>  {
    const snapshot = await db.collection("recipes").get();
    const loadingData = [];
    snapshot.forEach((doc) => {
        loadingData.push({
        id: doc.id,
        ...doc.data(),
        });
    });
    set(loadingData); 
  }

  const handleNewRecipe = async (newRecipe) => {
     
    if(newRecipe){
      await db.collection("recipes").add({
        name: newRecipe.name,
        calorias: newRecipe.calorias,
        recipe: newRecipe.recipe
    })
    
      renderData();
    }

   }

  return { subscribe, renderData, handleNewRecipe}
}
