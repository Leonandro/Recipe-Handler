import React, { useState }  from 'react';
import './App.css';
import Header from './components/Header';
import ListRecipes from './components/ListRecipes';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';

const App = () => {

  const [recipes, setRecipes] = useState([{
                                            id: 1,
                                            name: 'Ensopado de galinha'  
                                          },
                                          {
                                            id: 2,
                                            name: 'Risoto'
                                          },
                                          {
                                            id: 3,
                                            name: 'strogonoff'
                                          }]);

  const handleNewRecipe = () => {
    var value = prompt('Digite a nova receita');

    if(value){
      setRecipes([...recipes, {id: 4, name: value}]);
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
