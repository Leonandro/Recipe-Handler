import React, { useState, useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import {HomeContainer} from '../styles/HomeStyle';
import Header from '../components/Header';
import ListRecipes from '../components/ListRecipes';
import AddRecipe from '../components/AddRecipe';
import SearchRecipe from '../components/SearchRecipe';
import {db} from '../firebase'

const Home = () => {

  const [recipes, setRecipes] = useState([]);

  const history = useHistory();

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

  function goToAddForm () {
      history.replace("/addrecipeform");
  }

  return (
    < HomeContainer>
      <Header/>
      <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
        <AddRecipe clickHandler={goToAddForm}/>
        <SearchRecipe/>
      </div>

      <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        <h2>Receitas já adicionadas</h2>
        <ListRecipes data={recipes}/>
      </div>
    </HomeContainer>
  );
}

export default Home;
