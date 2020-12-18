import React, { useState, useEffect }  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import AddRecipeForm from './views/AddRecipeForm';
import ViewRecipe from './views/ViewRecipe';
import SearchRecipePage from './views/SearchRecipePage';

const App = () => {


  return (
      <Router>
          <div className="App">
          <Switch>
            <Route path="/viewrecipe/:name" exact component={ViewRecipe} />
            <Route path="/addrecipeform" exact component={AddRecipeForm} />
            <Route path="/searchrecipepage" exact component={SearchRecipePage}/>
            <Route path="/" exact component={Home}/>
            
          </Switch>
          </div>
      </Router>
    
  );
}

export default App;
