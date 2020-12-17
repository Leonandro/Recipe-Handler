import React, { useState, useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import {HomeContainer} from '../styles/HomeStyle';
import Header from '../components/Header';
import ListRecipes from '../components/ListRecipes';
import AddRecipe from '../components/AddRecipe';
import SearchRecipe from '../components/SearchRecipe';
import useRecipes from '../components/recipesHook';
import {db} from '../firebase'

const Home = () => {

  const { recipes, renderData, handleNewRecipe } = useRecipes();

  const history = useHistory();

  useEffect(renderData, []);


  function goToAddForm () {
      history.push("/addrecipeform");
  }

  return (
    < HomeContainer>
      <Header/>
      <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
        <AddRecipe clickHandler={goToAddForm}/>
        <SearchRecipe/>
      </div>

      <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        <h2>Below, we show all the recipes we found in your kitchen.</h2>
        <ListRecipes data={recipes}/>
      </div>
    </HomeContainer>
  );
}

export default Home;
