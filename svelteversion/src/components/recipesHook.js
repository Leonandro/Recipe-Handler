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

  const handleNewRecipe = async () => {
    var value = prompt('Digite a nova receita');

    if(value){
        await db.collection("recipes").add({
            name: value,
            calorias: 0
        })

        renderData();

        
    }

   }

  return { subscribe, renderData, handleNewRecipe}
}
