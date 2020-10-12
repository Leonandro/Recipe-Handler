import React, { useState, useEffect }  from 'react';
import './App.css';
import Header from './components/Header';
import ListRecipes from './components/ListRecipes';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import {db} from './firebase'

const App = () => {

  const [recipes, setRecipes] = useState([]);

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

  useEffect(renderData, []);
  

  const handleNewRecipe = () => {
    var value = prompt('Digite a nova receita');

    if(value){
      db.collection("recipes").add({
        name: value,
        calorias: 0
      })

      renderData();
    }
  }

  return (
    <div className="App">
      <Header/>
      <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
        <AddRecipe clickHandler={handleNewRecipe}/>
        <SearchRecipe/>
      </div>

      <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        <h2>Receitas já adicionadas</h2>
        <ListRecipes data={recipes}/>
      </div>
    </div>
  );
}

export default App;
