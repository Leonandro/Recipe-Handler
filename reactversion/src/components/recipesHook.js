import { useState } from 'react'
import {db} from '../firebase'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  //Catch all the recipes on the dataBase
  const renderData = async () => {
    const snapshot = await db.collection("recipes").get();
      const loadingData = [];
      snapshot.forEach((doc) => {
        loadingData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setRecipes(loadingData);
      //console.log(recipes); 
  }

  //Add a new recipe on the dataBase
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


  return { recipes, renderData, handleNewRecipe }
}
